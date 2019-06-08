; (function () {
  var UserName = (function () {
    var userNameElement = document.createElement('span');
    return {
      render: function (props) {
        props = props || {};
        userNameElement.innerText = props.name || 'anonymous';
        userNameElement.style.backgroundColor = props.bgColor || 'transparent';
        userNameElement.style.color = props.color || 'black';
      },
      setBgColor: function (bgColor) {
        userNameElement.style.backgroundColor = bgColor;
      },
      getElement: function () {
        return userNameElement;
      }
    }
  })();

  window.UserName = UserName;
})();
