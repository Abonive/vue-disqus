<template>
  <div id="disqus_thread"></div>
</template>

<script>
  export default {
    props: {
      shortname: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
      },
    },
    mounted () {
      if (window.DISQUS) {
        this.reset(window.DISQUS)
        return
      }
      this.init()
    },
    methods: {
      reset (dsq) {
        dsq.reset({
          reload: true,
          config: () => {
            if (!this.identifier) {
              this.page.identifier = (this.$route.path || window.location.pathname)
            }else {
              this.page.identifier = this.identifier
            }
            this.page.url = this.$el.baseURI
          }
        })
      },
      init () {
        window.disqus_config = () => {
          this.page.url = (this.$route.path || window.location.pathname)
          this.page.url = this.$el.baseURI
        }
        setTimeout(() => {
          let d = document
            , s = d.createElement('script')
          s.type = 'text/javascript'
          s.async = true
          s.setAttribute('id', 'embed-disqus')
          s.setAttribute('data-timestamp', +new Date())
          s.src = `//${this.shortname}.disqus.com/embed.js`
          ;(d.head || d.body).appendChild(s)
        }, 0)
      }
    }
  }
</script>
