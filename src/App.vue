<template>
  <router-view></router-view>
</template>

<script>
</script>
<style>
@font-face {
    font-family: 'Larsseit';
    src: url(fonts/Larsseit.otf),
}
@font-face {
    font-family: 'larsseit-light';
    src: url(fonts/Larsseit-Light.ttf),
    
}
@font-face {
  font-family: "larsseit-thinitalic";
  src: url(fonts/Larsseit-ThinItalic.otf);
}
@font-face {
    font-family: 'LarsseitThin';
    src: url(fonts/Larsseit-Thin.otf),
}

@font-face {
    font-family: 'BigCaslon';
    src: url(fonts/BigCaslon.ttf);
}
@font-face {
    font-family: 'BigCaslonMedium';
    src: local(BigCaslonMedium),
}
@font-face {
    font-family: 'MishafiGold';
    src: url(fonts/MishafiGold.ttf);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    background-color: #FFF;
    color: #555;
    font-family:  'Lato', 'Arial', sans-serif;
    font-weight: 300;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
}

/* 
export const req = axios.create({
    baseURL: `https://www.hilltop.ge/api/`,
    headers: {
        'Accept-Language' : 'lang'
    }
})

async fetchSliderList({commit}, lang){
            const { data } = await req.get('slider/', {
                headers : {
                    'Accept-Language' : lang
                }
            })
            commit('setSliderList', data)
        }

    const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
}); */
</style>


