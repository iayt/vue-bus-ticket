<template>
  <div class="curtainArea">
    <div class="loading">
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
    </div>
  </div>
</template>

<style>
  .curtainArea {
    display: block;
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
  }
  .loading {
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
  }

  .loading > div {
    width: 18px;
    height: 18px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .loading .item1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .loading .item2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
</style>
