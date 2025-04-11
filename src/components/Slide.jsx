
export function Slide({
  children,
  videoSrc = null,
  iFrameSrc = null,
  imageSrc = null,
  id = '',
  className =  '',
  footer = null,
  loop = true,
  transition = 'none',
  color = '',
}) {
  return (<>
      <section
          id={id}
          className={className}
          {...(videoSrc && {'data-background-video': videoSrc, 'data-background-video-muted': 'true'})}
          {...(videoSrc && loop && {'data-background-video-loop': 'true'})}
          {...(iFrameSrc && {'data-background-iframe': iFrameSrc})}
          {...(imageSrc && {'data-background-image': imageSrc})}
          data-background-color={color}
          data-transition={transition}
      >
          {children}
          {footer && <div className="footer"><p>{footer}</p></div>}
      </section>
      </>)
}


export function ColumnSlide ({ children, className = '', transition = '', color = ''}) {
  return <section className={className} style={{
    display: 'flex',
  }} data-background-color={color} data-transition={transition}>{children}</section>
}