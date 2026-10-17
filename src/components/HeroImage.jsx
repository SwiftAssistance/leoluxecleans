import ReactDOM from 'react-dom';

const SRC_SET = '/hero-768.webp 768w, /hero-1536.webp 1536w';

// The one high-priority image per page. Pre-optimised WebP in two widths,
// preloaded so the browser finds it before CSS and JS.
const HeroImage = ({ className = '', sizes = '100vw' }) => {
  ReactDOM.preload('/hero-1536.webp', {
    as: 'image',
    imageSrcSet: SRC_SET,
    imageSizes: sizes,
    fetchPriority: 'high',
  });
  return (
    <img
      src="/hero-1536.webp"
      srcSet={SRC_SET}
      sizes={sizes}
      width={1536}
      height={1024}
      alt=""
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className={className}
    />
  );
};

export default HeroImage;
