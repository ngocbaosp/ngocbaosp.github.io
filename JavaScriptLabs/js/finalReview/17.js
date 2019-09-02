function Data() {

    var x =[];
    return{
      put: function (item) {
          x.push(item);
      },
      take:function () {
          return x.pop();
      } ,
      size:function () {
          return x.length;

      }
    };
}
y = Data();
y.put(10);
y.put(-15);
alert(y.size());
alert(y.take());
alert(y.size());
