lib {
    baseUrl = http://www.lamello.ch/
    atImage = <span class="icon-at"></span>

    logo {
        src = fileadmin/static/public/images/logo.svg
        width =166
        height =82
        rootPageUid = 1
    }

    meta {
        pageTitleSufix = PageTitleSufix
        metaDescription = Meta description
        metaKeywords = Meta keywords
        metaAbstract = Meta keywords Abstract
        shortcutIcon = fileadmin/static/public/images/favicon/
        clearMeta = 0
    }
}

# change baseUrl
[globalString = IENV:HTTP_HOST = lamello.deepscreen.ch]
lib.baseUrl  = http://lamello.deepscreen.ch/
[global]

[globalVar = GP:tx_news_pi1|news > 0]
    lib.meta.clearMeta = 1
[global]
[globalVar = GP:tx_news_pi1|overwriteDemand|categories > 0]
    lib.meta.clearMeta = 1
[global]

styles {
    templates {
        templateRootPath = fileadmin/static/private/Templates/Ext/fluid_styled_content/Templates
        partialRootPath = fileadmin/static/private/Templates/Ext/fluid_styled_content/Partials
        layoutRootPath =
    }
    
    content {
        textmedia {
            # cat=content/cTextmedia/b1; type=int+; label= Max Image/Media Width: This indicates that maximum number of pixels (width) a block of media elements inserted as content is allowed to consume
            maxW = 1920
            # cat=content/cTextmedia/b2; type=int+; label= Max Image/Media Width (Text): Same as above, but this is the maximum width when text is wrapped around an block of media elements. Default is 50% of the normal Max Media Item Width
            maxWInText = 962
            # cat=content/cTextmedia/c1; type=string; label= Click-enlarge Media Width: This specifies the width of the enlarged media element when click-enlarge is enabled
            linkWrap.width = 1920m
            # cat=content/cTextmedia/c2; type=string; label= Click-enlarge Media Height: This specifies the height of the enlarged media element when click-enlarge is enabled
            linkWrap.height = 800m
            # cat=content/cTextmedia/c4; type=boolean; label= Lightbox click-enlarge rendering: Whether media elements with click-enlarge checked should be rendered lightbox-compliant
            linkWrap.lightboxEnabled = 1
            # cat=content/cTextmedia/c5; type=string; label= Lightbox CSS class: Which CSS class to use for lightbox links (only applicable if lightbox rendering is enabled)
            linkWrap.lightboxCssClass = fancybox
            # cat=content/cTextmedia/c6; type=string; label= Lightbox rel="" attribute: Which rel="" attribute to use for lightbox links (only applicable if lightbox rendering is enabled)
            linkWrap.lightboxRelAttribute = fancybox
        }
    }
}

plugin {
    tx_form {
        view {
            templateRootPath = fileadmin/static/private/Templates/Ext/form/Templates/
            partialRootPath = fileadmin/static/private/Templates/Ext/form/Partials/
            layoutRootPath = EXT:form/Resources/Private/Layouts/
        }
    }
}