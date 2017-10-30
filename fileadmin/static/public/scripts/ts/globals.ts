config {
  # disable chache for developing
  no_cache = 0
  
  # debugging h error
  contentObjectExceptionHandler = 0
  
  # simulateStaticDocuments settings
  simulateStaticDocuments = 0
  simulateStaticDocuments_noTypeIfNoTitle = 1
  simulateStaticDocuments_pEnc = md5
  simulateStaticDocuments_addTitle = 50
  
  # realurl settings
  baseURL = {$lib.baseUrl}
  
  tx_realurl_enable = 1
  prefixLocalAnchors = all
  
  # no element description comments
  disablePrefixComment = 1
  
  # image RealURL
  meaningfulTempFilePrefix = 1
  
  # no targets in mail links
  jumpurl_mailto_disable = 1
  
  #email encryption
  spamProtectEmailAddresses = -2
  spamProtectEmailAddresses_atSubst = {$lib.atImage}
  
  doctype = html5
  xmlprologue = none
  
  renderCharset = utf-8
  metaCharset = utf-8
  
  # statistics awstats
  stat = 1
  stat_apache = 1
  stat_apache_logfile = {$lib.baseUrl}log.txt
  
  #include default javascript function in an external file
  /*
      removeDefaultJS = external
      removeDefaultJS = 1
  */
  
  #moveJsFromHeaderToFooter = 1
  #compressJs = 1
  #compressCss = 1
  #minifyJS = 1
  #minifyCSS = 1
  #concatenateJsAndCss = 1
  
  #admin panel
  admPanel = 0
  admPanel {
    hide = 0
    enable.edit = 1
    enable.preview = 1
  }
  
  #languange settings
  linkVars = L
  sys_language_overlay = 1
  sys_language_mode = content_fallback
  
  sys_language_uid = 2
  language = de
  htmlTag_langKey = de
  locale_all = de_DE.utf-8
  
}

#other languange settings
/*
[globalVar = GP:L = 2]
config.sys_language_uid = 2
config.language = de
config.locale_all = de_DE.utf-8
lib.lang.value = 1
lib.searchPlaceholder.value = Suchbegriff
[global]
*/
#other languange settings

[globalVar = GP:L = 1]
config.sys_language_uid = 1
config.language = en
config.htmlTag_langKey = en
config.locale_all = en_EN.utf-8
[global]

[globalVar = GP:L = 3]
config.sys_language_uid = 3
config.language = fr
config.locale_all = fr_FR.utf-8
lib.lang.value = 3
lib.searchPlaceholder.value = Recherche
[global]

[globalVar = GP:L = 4]
config.sys_language_uid = 4
config.language = cn
config.locale_all = cn_CN.utf-8
lib.lang.value = 4
lib.searchPlaceholder.value = Search
[global]

[globalVar = GP:L = 5]
config.sys_language_uid = 5
config.language = ru
config.locale_all = ru_RU.utf-8
lib.lang.value = 5
lib.searchPlaceholder.value = Search
[global]

[globalVar = GP:L = 6]
config.sys_language_uid = 6
config.language = pt
config.locale_all = pt_PT.utf-8
lib.lang.value = 6
lib.searchPlaceholder.value = Search
[global]


# default object page
page = PAGE
page {
  typeNum = 0
  config.noPageTitle = 2
  
  # include css
  includeCSS {
    10 = https://fonts.googleapis.com/css?family=Bitter:400,400i|Roboto:300,300i,400,400i,700
    10.media = all
    20 = fileadmin/static/public/css/normalize.css
    20.media = all
    30 = fileadmin/static/public/scripts/js/plugins/responsiveTables/stacktable.css
    30.media = all
    35 = fileadmin/static/public/scripts/js/plugins/responsive_menu/jquery.mmenu.css
    35.media = all
    40 = fileadmin/static/public/scripts/js/plugins/select2-3.5.2/select2.css
    40.media = all
    50 = fileadmin/static/public/css/jquery-ui.css
    50.media = all
    60 = fileadmin/static/public/scripts/js/plugins/slider/flexslider.css
    60.media = all
    70 = fileadmin/static/public/scripts/js/plugins/fancybox/jquery.fancybox.css
    70.media = all
    80 = fileadmin/static/public/css/print.css
    80.media = print
    base = fileadmin/static/public/scss/style.scss
  }
  
  # include Js
  includeJS {
    10 = fileadmin/static/public/scripts/js/jquery-1.11.min.js
    20 = fileadmin/static/public/scripts/js/jquery-ui.min.js
    30 = fileadmin/static/public/scripts/js/TweenMax.min.js 
    35 = fileadmin/static/public/scripts/js/CSSRulePlugin.min.js
    36 = fileadmin/static/public/scripts/js/plugins/responsive_menu/jquery.mmenu.js
    40 = fileadmin/static/public/scripts/js/plugins/select2-3.5.2/select2.min.js
    50 = fileadmin/static/public/scripts/js/custom.file.upload.js
    60 = fileadmin/static/public/scripts/js/plugins/slider/jquery.flexslider-min.js
    65 = fileadmin/static/public/scripts/js/plugins/masonry/masonry.pkgd.min.js
    70 = fileadmin/static/public/scripts/js/plugins/responsiveTables/stacktable.min.js
    80 = fileadmin/static/public/scripts/js/jquery.validate.min.js
    81 = fileadmin/static/public/scripts/js/plugins/localization/messages_de.js
    90 = fileadmin/static/public/scripts/js/plugins/fancybox/jquery.fancybox.pack.js
    91 = fileadmin/static/public/scripts/js/plugins/fancybox/helpers/jquery.fancybox-media.js
    92 = fileadmin/static/public/scripts/js/plugins/parallax/jquery.stellar.js
    93 = https://maps.google.com/maps/api/js?key=AIzaSyApX3P3_4ES0XTqO7lyaDs9NdCIEbAVNGE
    94 = fileadmin/static/public/scripts/js/plugins/googleMapsLocator/handlebars.min.js
    95 = fileadmin/static/public/scripts/js/plugins/googleMapsLocator/jquery.storelocator.js
    #96 = fileadmin/static/public/scripts/js/plugins/googleMapsLocator/geocode.js
    97 = fileadmin/static/public/scripts/js/plugins/googleMapsLocator/locator_ch.js


    100 = fileadmin/static/public/scripts/js/main.js
  }
}

[globalVar = GP:L = 3]
  96 = fileadmin/static/public/scripts/js/plugins/googleMapsLocator/locator_ch.fr.js
[global]

lib {
  menu{
    pid{
      main = TEXT
     menu.value = {$lib.menu.pid.main}
      plugins = TEXT
      plugins.value = {$lib.menu.pid.plugins}
    }  
  }
 
  
  logo = IMAGE
  logo {
    file = {$lib.logo.src}
    file {
      width = {$lib.logo.width}
      height = {$lib.logo.height}
    }
    stdWrap.typolink.parameter = {$lib.logo.rootPageUid}
  }
  
   footer{
    left = CONTENT
    left {
      table = tt_content
      select {
        pidInList = {$lib.footer.pid}
        languageField = sys_language_uid
        where = colPos=0
        andWhere = deleted=0
        andWhere = hidden=0
        orderBy = sorting
      }
    }
        
    middle = CONTENT
    middle {
      table = tt_content
      select {
        pidInList = {$lib.footer.pid}
        languageField = sys_language_uid
        where = colPos=1
        andWhere = deleted=0
        andWhere = hidden=0
        orderBy = sorting
      }
    }
    
    right = CONTENT
    right {
      table = tt_content
      select {
        pidInList = {$lib.footer.pid}
        languageField = sys_language_uid
        where = colPos=2
        andWhere = deleted=0
        andWhere = hidden=0
        orderBy = sorting
      }
    }
    
    copy = TEXT
    copy.value = {$lib.footer.copy} 
  } 
  
  
  defaultImage = TEXT
  defaultImage.value = {$lib.defaultImage}
  
  defaultHeaderImage85= TEXT
  defaultHeaderImage85.value = {$lib.defaultHeaderImage85}

  defaultHeaderImage370= TEXT
  defaultHeaderImage370.value = {$lib.defaultHeaderImage370}
   product {
     finderPid = TEXT
     finderPid.value = {$lib.product.finderPid}
    singlePid = TEXT
    singlePid.value = {$lib.product.singlePid}
    sections {
      download = TEXT
      download.value = {$lib.product.sections.download}
      articles = TEXT
      articles.value = {$lib.product.sections.articles}
      information = TEXT
      information.value ={$lib.product.sections.information}
      technicalvideos = TEXT
      technicalvideos.value ={$lib.product.sections.technicalvideos}      
      technical = TEXT
      technical.value = {$lib.product.sections.technical}
      machinesTechnical = TEXT
      machinesTechnical.value = {$lib.product.sections.machinesTechnical}
      infobox = TEXT
      infobox.value = {$lib.product.sections.infobox}
      shortDescription = TEXT
      shortDescription.value =  {$lib.product.sections.shortDescription}     
      description = TEXT
      description.value ={$lib.product.sections.description}
      }
    }
  
  
}

[IP = 89.216.104.79][IP=178.221.186.173]
config.no_cache = 1
[global]
