Vue.component('disqus', {
  template: '<div id="disqus_thread"></div>',
  props: {
    shortname: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
    },
  },
  mounted: () => {
    if (window.DISQUS) {
      this.reset(window.DISQUS)
      return
    }
    this.init()
  },
  methods: {
    reset: (dsq) => {
      var self = this
      dsq.reset({
        reload: true,
        config: () => {
          if (!this.identifier) {
            this.page.identifier = (self.$route.path || window.location.pathname)
          }else {
            this.page.identifier = this.identifier
          }

          this.page.url = self.$el.baseURI
        }
      })
    },
    init: () => {
      var self = this
      window.disqus_config = () => {
        this.page.url = (this.$route.path || window.location.pathname)
        this.page.url = this.$el.baseURI
      }
      setTimeout(() => {
        var d = document
          , s = d.createElement('script')
        s.setAttribute('id', 'embed-disqus')
        s.setAttribute('data-timestamp', +new Date())
        s.type = 'text/javascript'
        s.async = true
        s.src = '//' + this.shortname + '.disqus.com/embed.js'
        ;(d.head || d.body).appendChild(s)
      }, 0)
    }
  }
});
