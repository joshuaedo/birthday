import { useEffect, useState } from 'react';

export const usePageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadedResources, setLoadedResources] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  const isHTMLImageElement = (element: Element): element is HTMLImageElement =>
    element instanceof HTMLImageElement;

  const isHTMLVideoElement = (element: Element): element is HTMLVideoElement =>
    element instanceof HTMLVideoElement;

  useEffect(() => {
    const resources = Array.from(
      document.querySelectorAll(
        'img, video, audio, script, link[rel="stylesheet"]'
      )
    );

    setTotalResources(resources.length);

    // If no resources, hide loader after a brief delay
    if (resources.length === 0) {
      setTimeout(() => setIsVisible(false), 500);
      return;
    }

    const onResourceLoad = () => {
      setLoadedResources((prev) => {
        const newCount = prev + 1;

        // Check if all resources are loaded
        if (newCount >= resources.length) {
          setTimeout(() => setIsVisible(false), 500);
        }

        return newCount;
      });
    };

    // Check initially loaded resources
    let initialLoadedCount = 0;
    resources.forEach((resource) => {
      if (isHTMLImageElement(resource)) {
        if (resource.complete) {
          initialLoadedCount++;
        } else {
          resource.addEventListener('load', onResourceLoad);
          resource.addEventListener('error', onResourceLoad);
        }
      } else if (isHTMLVideoElement(resource)) {
        if (resource.readyState >= 3) {
          initialLoadedCount++;
        } else {
          resource.addEventListener('canplay', onResourceLoad);
          resource.addEventListener('error', onResourceLoad);
        }
      } else {
        // For other resources, check if they're already loaded
        if ((resource as HTMLLinkElement).sheet) {
          initialLoadedCount++;
        } else {
          resource.addEventListener('load', onResourceLoad);
          resource.addEventListener('error', onResourceLoad);
        }
      }
    });

    // Update initial count
    if (initialLoadedCount > 0) {
      setLoadedResources(initialLoadedCount);
      if (initialLoadedCount >= resources.length) {
        setTimeout(() => setIsVisible(false), 500);
      }
    }

    // Add a safety timeout to hide loader after 9 seconds
    const safetyTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 9000);

    return () => {
      clearTimeout(safetyTimeout);
      resources.forEach((resource) => {
        if (isHTMLImageElement(resource) || isHTMLVideoElement(resource)) {
          resource.removeEventListener('load', onResourceLoad);
          resource.removeEventListener('canplay', onResourceLoad);
        }
        resource.removeEventListener('error', onResourceLoad);
      });
    };
  }, []);

  // Calculate progress
  const progress =
    totalResources === 0
      ? 100
      : Math.round((loadedResources / totalResources) * 100);

  return {
    isVisible,
    progress,
    loadedResources,
    totalResources,
  };
};

export default usePageLoader;
