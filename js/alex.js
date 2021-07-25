var name;
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
function gameplay() {
  Swal.fire({
    title: '歡迎來到烏龍派出所猜猜遊戲',
    input: 'text',
    showLoaderOnConfirm: true,
    confirmButtonText: '我取好了',
    cancelButtonText: '取消',
    showCancelButton: true,
    allowOutsideClick: false
  }).then(function (result) {
    if (result.dismiss === 'cancel') {
    
    }
    else {
      name = result.value;
      Swal.fire({
        title: `這名字取得不錯哦!開始遊戲吧!`,
        text: '請開始闖關挑戰',
        allowOutsideClick: false,
        imageUrl: 'files/01.jpg',
        imageHeight: 300,
        imageWidth: 500,
      }).then(start);
    }
  });
}
function start() {
  let mission;
  Swal.fire({
    title: `${name}遊戲即將開始`,
    text: "一旦選錯路就會馬上GG，你要開始了嗎?",
    confirmButtonText: '開始!',
    cancelButtonText: '離開..',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: 'files/10.jpg',
    imageHeight: 300,
        imageWidth: 500,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        title: `等你準備好挑戰再來吧！`,
        allowOutsideClick: false,
        imageUrl: 'files/11.jpg',
        imageHeight: 300,
        imageWidth: 500,
      });
    }
    else {
      Swal.fire({
        title: `欣賞你的勇氣，開始闖五關吧！`,
        allowOutsideClick: false,
        imageUrl: 'files/12.jpg',
        imageHeight: 300,
        imageWidth: 500,
      }).then(function () {
        Swal.fire({//lv1
          title: "第1關:特殊刑事組裡，哪位刑警的名言是「男人股間的突起物不可小覷」？",
          confirmButtonText: '月光刑警',
          cancelButtonText: '熱褲刑警',
          showCancelButton: true,
          allowOutsideClick: false,
          imageUrl: 'files/20.gif',
          imageHeight: 300,
          imageWidth: 500,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.dismiss === 'cancel') {
            Swal.fire({
              //B
              title: "很遺憾，你答錯了!",
              confirmButtonText: "重新來過",
              allowOutsideClick: false,
              imageUrl: "files/21.jpg",
              imageHeight: 300,
        imageWidth: 500,
            });
          }
          else {
            Swal.fire({ //G
              title: "恭喜過關!",
              allowOutsideClick: false,
              imageUrl: 'files/22.jpg',
              imageHeight: 300,
        imageWidth: 500,
            }).then(function () {
              Swal.fire({//lv2
                title: "第2關:阿兩腳上的木屐是大原所長多年前買給他的，請問那雙木屐是什麼顏色？",
                confirmButtonText: '棕色',
                cancelButtonText: '綠色',
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: 'files/30.gif',
                imageHeight: 300,
        imageWidth: 500,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
              }).then((result) => {
                if (result.dismiss !== 'cancel') {
                  Swal.fire({
                    //B
                    title: "很遺憾，你答錯了!",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: "files/21.jpg",
                    imageHeight: 300,
        imageWidth: 500,
                  });
                }
                else {
                  Swal.fire({ //G
                    title: "恭喜過關!",
                    allowOutsideClick: false,
                    imageUrl: 'files/22.jpg',
                    imageHeight: 300,
        imageWidth: 500,
                  }).then(function () {
                    Swal.fire({//lv3
                      title: "第3關:阿兩提起兒時回憶時會出現的兒時玩伴，總共有三個人，和兩津合稱「豚珍勘根」，請問這四個人分別是？",
                      confirmButtonText: ' 豚一、珍吉、勘吉、根郎',
                      cancelButtonText: '豚平、珍吉、勘吉、根太',
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: 'files/40.jpg',
                      imageHeight: 300,
        imageWidth: 500,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33'
                    }).then((result) => {
                      if (result.dismiss !== 'cancel') {
                        Swal.fire({
                          //B
                          title: "很遺憾，你答錯了!",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,
                          imageUrl: "files/21.jpg",
                          imageHeight: 300,
        imageWidth: 500,
                        });
                      }
                      else {
                        Swal.fire({ //G
                          title: "恭喜過關!",
                          allowOutsideClick: false,
                          imageUrl: 'files/22.jpg',
                          imageHeight: 300,
        imageWidth: 500,
                        }).then(function () {
                          Swal.fire({//lv4
                            title: "第4關:本田的弟弟只要一坐上什麼交通工具，就會性情大變？",
                            confirmButtonText: '腳踏車',
                            cancelButtonText: '機車',
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: 'files/50.gif',
                            imageHeight: 300,
        imageWidth: 500,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33'
                          }).then((result) => {
                            if (result.dismiss !== 'cancel') {
                              Swal.fire({
                                //B
                                title: "很遺憾，你答錯了!",
                                confirmButtonText: "重新來過",
                                allowOutsideClick: false,
                                imageUrl:
                                "files/21.jpg",
                                  imageHeight: 300,
                                  imageWidth: 500,
                              });
                            }
                            else {
                              Swal.fire({ //G
                                title: "恭喜過關!看來你很厲害嘛，剩最後一題囉!加油!",
                                allowOutsideClick: false,
                                imageUrl: 'files/52.jpg',
                                imageHeight: 300,
        imageWidth: 500,
                              }).then(function () {
                                Swal.fire({//lv5
                                  title: "第5關:請問麻里愛喜歡的人是？",
                                  confirmButtonText: '兩津勘吉',
                                  cancelButtonText: '中川圭一',
                                  showCancelButton: true,
                                  allowOutsideClick: false,
                                  imageUrl: 'files/60.jpg',
                                  imageHeight: 300,
        imageWidth: 500,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33'
                                }).then((result) => {
                                  if (result.dismiss === 'cancel') {
                                    Swal.fire(
                                      {
                                        //B
                                        title:"很遺憾，你答錯了!",
                                        confirmButtonText:"重新來過",
                                        allowOutsideClick: false,
                                        imageUrl:"files/21.jpg",
                                        imageHeight: 300,
        imageWidth: 500,
                                      }
                                    );
                                  }
                                  else {
                                    Swal.fire({ //G
                                      title: "恭喜過關!你太厲害啦!看來你真是個兩津迷呢!",
                                      allowOutsideClick: false,
                                      imageUrl: 'files/62.jpg',
                                      imageHeight: 300,
        imageWidth: 500,
                                    }).then(function () {
                                      finish(1);
                                    });
                                  }
                                });
                              });
                            }
                          });
                        });
                      }
                    });
                  });
                }
              });
            });
          }
        });
      });
    }
  });
}
function finish(e) {
  if (e) {
    document.body.style.backgroundImage = "url('files/bg2.jpg')";
    mybtn.removeEventListener("click", start);
    mybtn.addEventListener("click", function(){
      location.reload();
    });
    mybtn.value = "恭喜過關";
  }
}
gameplay();