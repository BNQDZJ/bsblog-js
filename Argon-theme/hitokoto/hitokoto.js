fetch('https://v1.hitokoto.cn?c=i')
  .then(response => response.json())
  .then(data => {
    const hitokoto_all = data
    const hitokoto_hitokoto = document.getElementsByClassName("leftbar-banner-subtitle")[0]
    hitokoto_hitokoto.innerText = data.hitokoto + "\n—— " + data.from_who + "「" + data.from + "」"
  })
  .catch(console.error)
