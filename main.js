;(function(){
  function clone(obj) {
    var tmp = {};
    (function mid(obj, tmp) {
      for (var name in obj) {
        if (typeof obj[name] == 'object') {
          tmp[name] = {};
          mid(obj[name], tmp[name]);
        }
        else if (typeof obj[name] == 'array'){
          mid(obj[name], tmp[name]);
        }
        else {
          tmp[name] = obj[name];
        }
      }
    })(obj, tmp);
    return tmp;
  }
  function extend(obj, props) {
    for (var name in props) {
      if (typeof props[name] == 'object') {
        extend(obj[name], props[name]);
      } else {
        obj[name] = props[name];
      }
    }
    return obj;
  }
  var normal = {
    animate: '',
    size: 50,
    backgroundColor: '#ffffff',
    border: {
      top: {
        color: '#0091ea',
        style: 'solid',
        width: 30
      },
      left: {
        color: '#00b8d4',
        style: 'solid',
        width: 30
      },
      right: {
        color: '#42bd41',
        style: 'solid',
        width: 30
      },
      bottom: {
        color: '#dec755',
        style: 'solid',
        width: 30
      }
    }
  };
  var triangle = {
    normal: normal,
    left: extend(clone(normal), {
      size: 0,
      border: {
        top: {
          color: '#ffffff'
        },
        bottom: {
          color: '#ffffff'
        },
        left: {
          width: 0
        }
      }
    }),
    right: extend(clone(normal), {
      size: 0,
      border: {
        top: {
          color: '#ffffff'
        },
        bottom: {
          color: '#ffffff'
        },
        right: {
          width: 0
        }
      }
    }),
    top: extend(clone(normal), {
      size: 0,
      border: {
        left: {
          color: '#ffffff'
        },
        right: {
          color: '#ffffff'
        },
        bottom: {
          width: 0
        }
      }
    }),
    bottom: extend(clone(normal), {
      size: 0,
      border: {
        left: {
          color: '#ffffff'
        },
        right: {
          color: '#ffffff'
        },
        top: {
          width: 0
        }
      }
    }),
    square: extend(clone(normal), {
      animate: 'a-rotate',
      size: 0
    })
  };
  new Vue({
    el: '#app',
    data: triangle.normal,
    computed: {
      width: function() {
        return this.size + 'px';
      },
      height: function() {
        return this.size + 'px';
      },
      borderTop: function() {
        return [this.border.top.width + 'px', this.border.top.style, this.border.top.color].join(' ');
      },
      borderLeft: function() {
        return [this.border.left.width + 'px', this.border.left.style, this.border.left.color].join(' ');
      },
      borderRight: function() {
        return [this.border.right.width + 'px', this.border.right.style, this.border.right.color].join(' ');
      },
      borderBottom: function() {
        return [this.border.bottom.width + 'px', this.border.bottom.style, this.border.bottom.color].join(' ');
      },
      style: function() {
        return {
          width: this.width,
          height: this.height,
          backgroundColor: this.backgroundColor,
          borderTop: this.borderTop,
          borderBottom: this.borderBottom,
          borderLeft: this.borderLeft,
          borderRight: this.borderRight
        }
      }
    },
    methods: {
      tri: function(direction) {
        this.$data = triangle[direction];
      }
    }
  })
})()