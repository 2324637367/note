+ window.resizeTo(aWidth,aHeight)
   + aWidth 是一个整数，表示新的outerWidth（单位：收益）（包括滚动条，窗口边框等）。 
   + aHeight 是一个整数，表示新的outerHeight（单位：数值）（包括滚动条，标题栏，窗口边框等）。
   + ~~~
       // 将窗口设置为整个屏幕的 1/4 大小（面积）
        function quarter() {
        window.resizeTo(
            window.screen.availWidth / 2,
            window.screen.availHeight / 2
        );
        } 
    +  从Firefox 7开始，不能更改浏览器窗口的大小了，要根据以下的规则：

        不能设置那些不是通过window.open创建的窗口或Tab的大小。
        当一个窗口里面包含一个以上的Tab时，无法设置窗口的大小。  
    + ~~~
         window.resizeBy(-200, -200);
     + 该方法相对于窗口当前大小来调整该窗口的大小。要以绝对大小方式调整窗口的大小，可使用window.resizeTo。
    + DOMParser 可以将存储在串口中的XML或HTML源代码解析为一个DOM Document。
        +  window对象表示一个包含DOM文档的窗口，其 document属性指向窗口中加载的DOM文档。使用document.defaultView属性可以获取指定文档所在的窗口。
        window作为变量，代表了脚本正在运行的窗口，暴露给Javascript代码。
        本节为DOMWindow对象中可用的所有方法，属性和事件提供简要参考。window对象实现了Window接口，此接口继承自AbstractView接口。一些其他的类别函数，命名空间，对象，接口和构造函数与window没有典型的关联，却是有效的，它们在JavaScript参考和DOM参考中列出。
        在有标签页功能的浏览器中，每个标签都拥有自己的window对象；也就是说，同一个窗口的标签页之间不会共享一个window对象。有一些方法，如window.resizeTo和window.resizeBy之类的方法会作用于窗口显示整个不是而window对象所属的那个标签。一般而言，如果一样东西无法恰当地作用于标签，那么它就会作用于窗口。  
     +  HTMLImageElement接口提供了特别的属性和方法（在HTMLElement常规的之外，它也能通过继承使用）来操纵`<img>`元素的布局和图像。  
        + Image() 
          + Image()HTMLImageElement当调用没有参数时，new Image()等效于调用document.createElement("img")。构造器，带有两个可选的参数，分别表示资源的宽度和高度，创建了一个尚未插入的DOM树中的实例。
    + 属性 
        + window.closed
        + window.console
        + window.content 和window._content(过时的变种方法)
          + 返回当前窗口的内容元素的引用。通过带下划线的过时变种方法不再可获得Web内容。
        + window.controllers 返回当前chrome window的XUL控制器对象。
        + Window.customElements 
          + 返回对该CustomElementRegistry对象的引用，该引用可用于注册新的自定义元素并获取有关先前注册的自定义元素的信息。
            + CustomElementRegistry相互提供注册自定义元素和查询已注册元素的方法
        + Window.crypto:返回浏览器crypto对象。
        + Window.devicePixelRatio : 返回当前显示器的物理预期和设备独立的比例
        + Window.document : 返回对当前窗口所包含的文档的引用。
        + Window.DOMMatrix: 返回对DOMMatrix对象的引用，该对象表示4x4矩阵，适用于2D和3D操作。
        + Window.DOMMatrixReadOnly : 返回对DOMMatrixReadOnly对象的引用，该对象表示4x4矩阵，适用于2D和3D操作。
        + Window.DOMQuad 返回对DOMPoint对象的引用，该对象表示坐标系中的2D或3D点
        + Window.DOMRect ：返回对DOMRect的引用
        + Window.fullScreen
        + Window.history
          + Window.history是一个只读属性，用来获取History 对象的引用，History 对象提供了操作浏览器会话历史（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。
           + back() 这和用户点击浏览器回退按钮的效果相同。
           + window.history.forward();向前跳转（如同用户点击了前进按钮）
           + go(-1)===back()
           + go(1)===forward()
           + let numberOfEntries = window.history.length; 历史堆栈里的页面数量
           + pushState()
             + ~~~
                onst state = { 'page_id': 1, 'user_id': 5 }
                const title = ''
                const url = 'hello-world.html'
                history.pushState(state, title, url)
           + replaceState()
               + ~~~
                 window.onpopstate = function(event) {
                 alert(`location: ${document.location}, state: ${JSON.stringif (event.state)}`)
                 } 
                 history.pushState({page: 1}, "title 1", "?page=1")
                 history.pushState({page: 2}, "title 2", "?page=2")
                 history.replaceState({page: 3}, "title 3", "?page=3")
                 history.back() // alerts "location: http://example.com/example html?page=1, state: {"page":1}"
                 history.back() // alerts "location: http://example.com/example html, state: null"
                 history.go(2)  // alerts "location: http://example.com/example html?page=3, state: {"page":3}"
        + window.innerWidth  
        + Window.blur()
        + Window.close()