const drag = {
    inserted: function (el, binding, vnode) {
        binding ? binding : '';
        let images = el.getElementsByTagName('img');
        for (let img of images) {
            img.ondragstart = function () { return false; };
        }
        // 初始化
        vnode.context.__imgX = 0;
        vnode.context.__imgY = 0;
        vnode.context.__imgXY = {
            x: 0,
            y: 0
        };
        let o = vnode.context.__imgXY;
        let c = vnode.context;
        el.onmousedown = (e) => {
                o.x = e.x;
                o.y = e.y;
                el.onmousemove = (e) => {
                    let x2 = e.x;
                    let y2 = e.y;
                    // 获取移动距离
                    let x = x2 - o.x; // +-
                    let y = y2 - o.y;
                    c.__imgX += x;
                    c.__imgY += y;
                    // 讲当前位置保存方便下次移动进行比较
                    o.x = x2;
                    o.y = y2;
                    el.style.transform =
                        'translate(' + c.__imgX + 'px' + ',' + c.__imgY + 'px' + ')';
                };
        };
        el.onmouseup = () => {
            el.onmousemove = null;
        };
    }
}

export default drag;


