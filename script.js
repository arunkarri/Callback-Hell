let count = 10;
let content = document.getElementById('content');
content.innerText = count;
setTimeout(() => {
  count--;
  content.innerText = count;
  setTimeout(() => {
    count--;
    content.innerText = count;
    setTimeout(() => {
      count--;
      content.innerText = count;
      setTimeout(() => {
        count--;
        content.innerText = count;
        setTimeout(() => {
          count--;
          content.innerText = count;
          setTimeout(() => {
            count--;
            content.innerText = count;
            setTimeout(() => {
              count--;
              content.innerText = count;
              setTimeout(() => {
                count--;
                content.innerText = count;
                setTimeout(() => {
                  count--;
                  content.innerText = count;
                  setTimeout(() => {
                    count--;
                    content.innerText = count;
                    setTimeout(() => {
                      content.innerText = 'Happy Independence Day';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
