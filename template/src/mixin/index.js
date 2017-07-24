import { mapActions } from 'vuex';
/**
 * [loadMore 上滑加载数据]
 * @type {Object}
 */
export const loadMore = {
  directives:{
    'load-more': {
      bind:(el,binding) => {
        let windowHeight = document.body.clientHeight;
        let heightEl;
        let scrollEl = document.body;
        let oldScrollTop;
        let requestFram;

        el.addEventListener('touchstart',() => {
          heightEl = el.clientHeight;
        })
        el.addEventListener('touchmove', () => {
          loadFun();
				}, false)
        const loadFun = () => {
          //console.log(scrollEl.scrollTop + windowHeight,el.clientHeight);
          if (scrollEl.scrollTop + windowHeight> el.clientHeight) {
              //滑到底部时 do something...
              //console.log('滑到底了')
              binding.value();
          } else {
              return false;
          }
        }
      }
    }
  }
}

/**
 * [touchSwipe 左滑删除]
 * js:
 * import { touchSwipe } from 'mixin'
 * export default {
 *  mixins: [touchSwipe]
 * }
 * html:
 *
 * <div class="order-item" v-touch-swipe  data-del-width="200">
 *
 * 说明：
 * v-touch-swipe  为自定义指令
 * 外层class  需要添加overflow-x: hidden;
 *
 * date-del-width  为删除按钮的宽度，不传默认为200
 * @type {Object}
 */
export const touchSwipe = {
  directives: {
    'touch-swipe': {
      bind:(el,binding) => {
        const _delWidth = el.dataset.delWidth||200;
        let touchState = {};
        el.addEventListener('touchstart',()=> {
          const touch = event.touches[0];
          touchState = {};
          touchState.startLeft = touch.pageX;
          touchState.startTop = touch.pageY;
          touchState.maxDistance = _delWidth;
        });
        el.addEventListener('touchmove',() => {
          const touch = event.touches[0];
          touchState.currentLeft = touch.pageX;
          touchState.currentTop = touch.pageY;
          touchState.offsetLeft = touchState.startLeft - touchState.currentLeft;
          touchState.offsetTop = touchState.startTop - touchState.currentTop;

          if (Math.abs(touchState.offsetTop) < 20 && Math.abs(touchState.offsetLeft) > 50) {
            if (touchState.offsetLeft < 0) {
              el.style.transform = `translateX(0px)`;
              el.style.transition = 'all 0.3s linear';
            } else {
              el.style.transform = `translateX(${-touchState.maxDistance}px)`;
              el.style.transition = 'all 0.3s linear';
            }
          }
        });
        el.addEventListener('touchend',() => {
          event.preventDefault();
        });
        el.addEventListener('click',()=>{
            el.style.transform = `translateX(0px)`;
            // el.style.transition = 'all 0.3s linear';
        })
      }
    }
  }
}
