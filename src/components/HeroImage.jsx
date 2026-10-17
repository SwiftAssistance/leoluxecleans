import ReactDOM from 'react-dom';

// Pre-optimised WebP photos, each in 768w and 1536w (3:2).
const PHOTOS = {
  kitchen: { base: '/hero', alt: '' },
  team: { base: '/team', alt: '' },
};

// The one high-priority image per page, preloaded so the browser finds it
// before CSS and JS.
const HeroImage = ({ photo = 'kitchen', className = '', sizes = '100vw', alt }) => {
  const { base, alt: defaultAlt } = PHOTOS[photo];
  const srcSet = `${base}-768.webp 768w, ${base}-1536.webp 1536w`;
  ReactDOM.preload(`${base}-1536.webp`, {
    as: 'image',
    imageSrcSet: srcSet,
    imageSizes: sizes,
    fetchPriority: 'high',
  });
  return (
    <img
      src={`${base}-1536.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={1536}
      height={1024}
      alt={alt ?? defaultAlt}
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className={className}
    />
  );
};

export default HeroImage;
