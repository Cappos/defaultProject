lib {
  menu {
    main = HMENU
    main {
      wrap = <ul>|</ul>
      special = directory
      special.value = 3
      
      1 = TMENU
      1 {
        expAll = 1
        noBlur = 1
        NO = 1
        NO {
          wrapItemAndSub = <li class="first">|</li> |*| <li>|</li > |*| <li class = "last">|</li>
        }
        
        ACT = 1
        ACT < .NO
        ACT {
          wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>
        }
        
        IFSUB = 1
        IFSUB.wrapItemAndSub = <li class="first sub vertical">|</li> |*| <li class="sub vertical">|</li> |*| <li class="last sub vertical">|</li>
        
        ACTIFSUB < .IFSUB
        ACTIFSUB {
          wrapItemAndSub = <li class="active sub vertical">|</li>
        }
      }
      
      2 = TMENU
      2 {
        wrap = <ul>|</ul>
        noBlur = 1
        NO = 1
        NO{
          wrapItemAndSub = <li class="first">|</li> |*| <li> | </li> |*| <li class="last">|</li>
        }
        
        ACT = 1
        ACT < .NO
        ACT {
          wrapItemAndSub = <li class="first active">|</li> |*| <li class="active">|</li> |*| <li class="active last">|</li>
        }
      }      
    }
    #Lang navigation

    lang = COA
    lang{
      wrap = <ul>|</ul>
      10 = TEXT
      10 {
        typolink.parameter.data = page:uid
        typolink.addQueryString = 1
        typolink.addQueryString.method = GET
        typolink.addQueryString.exclude = cHash,L
        typolink.additionalParams.cObject = COA
        typolink{
          additionalParams{
            cObject {
              10 = TEXT
              10.wrap = |&L=0
            }
          }
        }
        typolink.returnLast = url
        wrap = <li class="act"><a href="|">EN</a></li>
        
      }
      
      20 < .10
      20.typolink.additionalParams.cObject.10.wrap = |&L=1
      20.wrap = <li><a href="/|">DE</a></li>

    }
  }
}
lib.activeLang = TEXT
lib.activeLang.value= EN
[globalVar = GP:L = 1]
lib.menu.lang.10.wrap = <li><a href="/|">EN</a></li>
lib.menu.lang.20.wrap = <li class="act"><a href="/|">DE</a></li>
lib.activeLang.value = DE
[global]