export default {
  controlsAuto: true,
  previewLinksAuto: false,
  pdfSeparateFragments: false,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: true,
  menu: {
    side: "left",
    useTextContentForMissingTitles:true,
    markers:false,
    loadIcons: false,
    custom: [
      {
        title: "Tools",
        icon: "<i class=\"fas fa-gear\"></i>",
        content: `<ul class=\"slide-menu-items\">
            <li class=\"slide-tool-item active\" data-item=\"0\"><a href=\"#\" onclick=\"RevealMenuToolHandlers.fullscreen(event)\"><kbd>f</kbd> Fullscreen</a></li>
            <li class=\"slide-tool-item\" data-item=\"1\"><a href=\"#\" onclick=\"RevealMenuToolHandlers.speakerMode(event)\"><kbd>s</kbd> Speaker View</a></li>
            <li class=\"slide-tool-item\" data-item=\"2\"><a href=\"#\" onclick=\"RevealMenuToolHandlers.overview(event)\"><kbd>o</kbd> Slide Overview</a></li>
            <li class=\"slide-tool-item\" data-item=\"3\"><a href=\"#\" onclick=\"RevealMenuToolHandlers.togglePdfExport(event)\"><kbd>e</kbd> PDF Export Mode</a></li>
            <li class=\"slide-tool-item\" data-item=\"4\"><a href=\"#\" onclick=\"RevealMenuToolHandlers.keyboardHelp(event)\"><kbd>?</kbd> Keyboard Help</a></li>
          </ul>`
      }
    ],
    openButton: true
  },

  smaller: false,

  // Display controls in the bottom right corner
  controls: false,

  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial: false,

  // Determines where controls appear, "edges" or "bottom-right"
  controlsLayout: 'edges',

  // Visibility rule for backwards navigation arrows; "faded", "hidden"
  // or "visible"
  controlsBackArrows: 'faded',

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  slideNumber: true,

  // 'all', 'print', or 'speaker'
  showSlideNumber: 'all',

  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash: true,

  // Start with 1 for the hash rather than 0
  hashOneBasedIndex: true,

  // Flags if we should monitor the hash and change slides accordingly
  respondToHashChanges: true,

  // Push each slide change to the browser history
  history: false,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Disables the default reveal.js slide layout (scaling and centering)
  // so that you can use custom CSS layout
  disableLayout: false,

  // Vertical centering of slides
  center: false,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // see https://revealjs.com/vertical-slides/#navigation-mode
  navigationMode: 'linear',

  // Randomizes the order of slides each time the presentation loads
  shuffle: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags whether to include the current fragment in the URL,
  // so that reloading brings you to the same fragment position
  fragmentInURL: false,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  help: true,

  // Flags if it should be possible to pause the presentation (blackout)
  pause: true,

  // Flags if speaker notes should be visible to all viewers
  showNotes: false,

  // Global override for autoplaying embedded media (null/true/false)
  autoPlayMedia: null,

  // Global override for preloading lazy-loaded iframes (null/true/false)
  preloadIframes: null,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Stop auto-sliding after user input
  autoSlideStoppable: true,

  // Use this method for navigation when auto-sliding
  autoSlideMethod: null,

  // Specify the average time in seconds that you think you will spend
  // presenting each slide. This is used to show a pacing timer in the
  // speaker view
  defaultTiming: 60,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // The display mode that will be used to show slides
  display: 'block',

  // Hide cursor if inactive
  hideInactiveCursor: true,

  // Time before the cursor is hidden (in ms)
  hideCursorTime: 1000,

  // Opens links in an iframe preview overlay
  previewLinks: false,

  // Transition style (none/fade/slide/convex/concave/zoom)
  transition: 'fade',

  // Transition speed (default/fast/slow)
  transitionSpeed: 'default',

  // Transition style for full page slide backgrounds
  // (none/fade/slide/convex/concave/zoom)
  backgroundTransition: 'fade',

  // Number of slides away from the current that are visible
  viewDistance: 3,

  // Number of slides away from the current that are visible on mobile
  // devices. It is advisable to set this to a lower number than
  // viewDistance in order to save resources.
  mobileViewDistance: 2,

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 1050,

  height: 700,

  // Factor of the display size that should remain empty around the content
  margin: 0.1,

  math: {
    mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    tex2jax: {
      inlineMath: [['\\(','\\)']],
      displayMath: [['\\[','\\]']],
      balanceBraces: true,
      processEscapes: false,
      processRefs: true,
      processEnvironments: true,
      preview: 'TeX',
      skipTags: ['script','noscript','style','textarea','pre','code'],
      ignoreClass: 'tex2jax_ignore',
      processClass: 'tex2jax_process'
    }

  }
}