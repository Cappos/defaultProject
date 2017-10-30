plugin {
    tx_news {
        view {
            templateRootPaths {
                1 = fileadmin/static/private/Templates/Ext/news/Templates
            }

            partialRootPaths {
                1 = fileadmin/static/private/Templates/Ext/news/Partials
            }

            layoutRootPaths {
                1 = fileadmin/static/private/Templates/Ext/news/Layouts
            }
        }

        settings {
            enablePreviewOfHiddenRecords = 1            
            cropMaxCharactersProductList = 300
            list {
                media {
                    dummyImage = fileadmin\user_upload\default_image\deafult.jpg
                    image {
                        maxWidth = 320
                        maxHeight = 230
                    }
                }

                paginate {
                    templatePath = fileadmin/static/private/Templates/Ext/news/Templates/ViewHelpers/Widget/Paginate/Index.html
                    insertAbove = 0
                    prevNextHeaderTags = 0
                }
            }

            meta {
                pageTitleSufix = {$lib.meta.pageTitleSufix}
                metaDescription = {$lib.meta.metaDescription}
                metaKeywords = {$lib.meta.metaKeywords}
                metaAbstract = {$lib.meta.metaAbstract}
            }
        }

        _LOCAL_LANG {
            default {

            }

            de {
                
            }
        }
    }
}