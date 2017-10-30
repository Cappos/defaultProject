page{
  10 = FLUIDTEMPLATE
  10 {
    format = html
    file = fileadmin/static/private/Templates/home.html
    variables {
           
      content_0 < styles.content.get
      content_0.select.where = colPos = 0

      content_1 < styles.content.get
      content_1.select.where = colPos = 1
     
      content_2 < styles.content.get
      content_2.select.where = colPos = 2
      
      content_3 < styles.content.get
      content_3.select.where = colPos = 3
      
      content_4 < styles.content.get
      content_4.select.where = colPos = 4
      
      content_5 < styles.content.get
      content_5.select.where = colPos = 5

      slider < styles.content.get
      slider.select.where = colPos = 0
      top < styles.content.get
      top.select.where = colPos = 1
      wide < styles.content.get
      wide.select.where = colPos = 2
      paralax < styles.content.get
      paralax.select.where = colPos = 3
      bottom_image < styles.content.get
      bottom_image.select.where = colPos = 4
      bottom < styles.content.get
      bottom.select.where = colPos = 5

      content_top < styles.content.get
      content_top.select.where = colPos = 0
      content_header < styles.content.get
      content_header.select.where = colPos = 1
      content_teaser_left < styles.content.get
      content_teaser_left.select.where = colPos = 2
      content_teaser_right < styles.content.get
      content_teaser_right.select.where = colPos = 3
      content_main < styles.content.get
      content_main.select.where = colPos = 4
      content_aside < styles.content.get
      content_aside.select.where = colPos = 5

      pageTitleSufix = TEXT
      pageTitleSufix.value = {$lib.meta.pageTitleSufix} 
      metaDescription = TEXT
      metaDescription.value = {$lib.meta.metaDescription}
      metaKeywords = TEXT
      metaKeywords.value = {$lib.meta.metaKeywords}
      metaAbstract = TEXT
      metaAbstract.value = {$lib.meta.metaAbstract}
      shortcutIcon = TEXT
      shortcutIcon.value = {$lib.meta.shortcutIcon}
      clearMeta = TEXT
      clearMeta.value = {$lib.meta.clearMeta}
      shortcutIcon = TEXT
      shortcutIcon.value = {$lib.shortcutIcon}
    }
    
    file{
      stdWrap{
        cObject = CASE
        cObject {
          key{
            data = levelfield:-1, backend_layout_next_level, slide
            override{
              field = backend_layout
            }
          }
          
          default = TEXT
          default.value = fileadmin/static/private/Templates/content.html

          1 = TEXT
          1.value = fileadmin/static/private/Templates/content.html

          2 = TEXT
          2.value = fileadmin/static/private/Templates/home.html
        }
      }
    }
  }
}