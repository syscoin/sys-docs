"""Render the Core DA budget figure with Matplotlib and Pillow."""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import MultipleLocator


BLOCK_INTERVAL_SECONDS = 150
RETENTION_SECONDS = 6 * 60 * 60
FULL_BLOB_BYTES = 2 * 1024**2

blob_counts = [8, 16, 24, 32]
block_bytes = [count * FULL_BLOB_BYTES for count in blob_counts]
rate_mbit_s = [size * 8 / BLOCK_INTERVAL_SECONDS / 1_000_000 for size in block_bytes]
retained_gib = [
    size * RETENTION_SECONDS / BLOCK_INTERVAL_SECONDS / 1024**3 for size in block_bytes
]
workloads = [f"{count} blobs\n{size // 1024**2} MiB" for count, size in zip(blob_counts, block_bytes)]

foreground = "#eef2ff"
secondary = "#bac8e6"
fig, axes = plt.subplots(1, 2, figsize=(10, 4.75), facecolor="#0e1629")
fig.subplots_adjust(left=.07, right=.98, bottom=.24, top=.68, wspace=.22)
fig.text(.055, .87, "Core DA bandwidth and storage", color=foreground, fontsize=21, weight="bold")
fig.text(.055, .78, "Full 2 MiB blobs  ·  One block every 150 seconds  ·  One copy of each payload",
         color=secondary, fontsize=11)

for ax, values, title, color, step, limit in [
    (axes[0], rate_mbit_s, "Average incoming payload (Mbit/s)", "#8ba6ff", 1, 4.2),
    (axes[1], retained_gib, "Six hours of raw payload (GiB)", "#73dcc7", 3, 10.5),
]:
    ax.set_facecolor("#141f36")
    ax.set_axisbelow(True)
    ax.yaxis.grid(True, color="#2e3d5b", linewidth=.8)
    ax.set_ylim(0, limit)
    ax.yaxis.set_major_locator(MultipleLocator(step))
    ax.tick_params(colors=secondary, length=0, labelsize=10)
    ax.set_title(title, loc="left", color=foreground, fontsize=11, weight="bold", pad=10)
    ax.set_xlabel("Blob payload per Core block", color=secondary, fontsize=10, labelpad=9)
    for spine in ax.spines.values():
        spine.set_visible(False)
    bars = ax.bar(workloads, values, width=.6, color=color, zorder=3)
    ax.bar_label(bars, labels=[f"{value:.2f}".rstrip("0").rstrip(".") for value in values],
                 color=foreground, padding=4, fontsize=10, weight="bold")

fig.text(.055, .045, "32 full blobs reach the Core block limit. Relay overhead, uploads and bursts add to link usage.",
         color=secondary, fontsize=9)
output = Path(__file__).resolve().parents[1] / "static" / "img" / "da-payload-budget.webp"
fig.savefig(output, dpi=160, pil_kwargs={"quality": 90})
