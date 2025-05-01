import { GET_SKILL } from "./actions";
import figma from "../assets/logos/figma.jpg"
import js from "../assets/logos/js.jpg"
import node from "../assets/logos/node.jpg"
import react from "../assets/logos/react.png"
import redux from "../assets/logos/redux.png"
import vs from "../assets/logos/vs.png"
const initialState = {
    skills: ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"],
    logos: [js, react, redux, node, vs, figma],
    tr: {
        header: {
            translate: "TRANSLATE TO ",
            languageName: "ENGLISH",
            head: "Ben Bir Frontend Developer'ım...",
            body: "...harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir ön uç ürünleri tasarlamayı seven."
        },
        profile: {
            head: "Profil",
            info: "Bilgilerim",
            date: "Doğum Tarihi",
            city: "İkamet Şehrim",
            education: "Eğitim Durumum",
            uni: "Hacettepe Ünv. Biyoloji Lisans, 2016",
            preferred: "Tercih Ettiğim Rol",
            about: "Hakkımda"
        },
        projects: ["Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar." , "Kullanıcılarınızın hangi çerezleri kabul edip reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal kurulumlu bir çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu ve bir NPM paketi olarak mevcuttur ve git deposu kod ve temalarda her türlü özelleştirmeyi mümkün kılar."],
        footer: {
            header: "Bana bir mesaj yollayın!",
            body: "Sorunuz ya da bir teklifiniz mi var? Yoksa sadece merhaba mı demek istiyorusunuz? Hiç beklemeyin!"
        }
    }  
}

export default function reducer(state = initialState, action) {
    switch (action.type){
        default:
            return state;
    }
}