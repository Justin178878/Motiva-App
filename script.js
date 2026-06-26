import {createClient} from "https://esm.sh/@supabase/supabase-js";

const SUPABASE_URL = "https://isanuixzxksbkqxsimye.supabase.co";
const SUPABASE_KEY = "sb_publishable_HVeUO2IeF-ButWS-Hd8HIA_sXPcJ1Wp";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);



const selectBoxing = document.querySelector("#boxing")
const closeButton = document.querySelector(".close-btn")

selectBoxing.addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href = 'boxing.html';
})

closeButton.addEventListener('click', function(event){
    event.preventDefault();

    window.location.href = 'app.html';
})
