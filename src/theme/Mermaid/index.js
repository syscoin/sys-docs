import React, {useEffect, useId, useRef, useState} from 'react';
import Mermaid from '@theme-original/Mermaid';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function ReadableMermaid(props) {
  const {colorMode} = useColorMode();
  const viewport = useRef(null);
  const viewportId = useId();
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const title = props.value.match(/^\s*accTitle:\s*(.+)$/m)?.[1] ?? 'Technical diagram';

  useEffect(() => {
    const element = viewport.current;
    // Mermaid inserts its SVG asynchronously. Its arrival and layout changes
    // resize the viewport, including when a reader opens or hides the sidebar.
    const observer = new ResizeObserver(() => {
      const width = element.querySelector('svg')?.viewBox.baseVal.width ?? 0;
      const needsEnlargement = width > element.clientWidth + 1;
      setNaturalWidth(needsEnlargement ? Math.ceil(width) : 0);
      if (!needsEnlargement) setEnlarged(false);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.diagram}>
      {naturalWidth > 0 && (
        <button type="button" className={styles.control} aria-controls={viewportId}
          aria-label={`${enlarged ? 'Fit' : 'Enlarge'} diagram: ${title}`}
          onClick={() => setEnlarged(current => !current)}>
          {enlarged ? 'Fit diagram' : 'Enlarge diagram'}
        </button>
      )}
      <div id={viewportId} ref={viewport} className={styles.viewport}
        role={enlarged ? 'region' : undefined}
        aria-label={enlarged ? title : undefined} tabIndex={enlarged ? 0 : undefined}>
        <div style={enlarged ? {width: naturalWidth} : undefined}>
          {/* Each theme render needs its own SVG id, including during hydration. */}
          <Mermaid key={colorMode} {...props} />
        </div>
      </div>
    </div>
  );
}
