fetch('https://v1.hitokoto.cn?c=i')
  .then(response => response.json())
  .then(data => {
    const hitokoto_all = data
    const hitokoto = document.getElementsByClassName("leftbar-banner-subtitle")[0]
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
