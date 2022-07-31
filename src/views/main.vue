<script>

</script>

<template>
<section class="front-section" id="top">
        <div style="height: 100vh; width: 100vw; background-color: #000000; opacity: 0.3; position: absolute;"></div>
        <div class="wrapper">
            <div class="logo-container">
                <img src="../assets/img/Sticker-LOGO.png" alt="logo">
            </div>
            <div class="fronttext-container">
                <p style="font-size: 4rem; font-weight: 300; color: #fff; z-index: 999; text-align: center;" class="front-text">Expect the unexpected.</p>
                <a href="https://shop.eventix.io/6bf08f3f-6d92-11ec-b3c4-9e36bf7d673e/tickets?shop_code=j47q93r9&original_referer=https%3A%2F%2Fl.instagram.com%2F" style="z-index: 99999; margin-top: 9vh;" target="_blank" class="ticketBtn-front">Tickets</a>
            </div>
        </div>
    </section>
    <section style="height: fit-content; margin-bottom: 10vh; width: 100vw;">
        <div style="height: 10vh;"></div>
        <div style="display: flex; justify-content: center; text-align: center;">
            <h1 style="color: #c40606; padding: 0px 5vw 0px 5vw; font-size: 3rem; font-weight: bold;" class="animated fade-left delay">BUY TICKETS NOW</h1>
        </div>
        <div class="ticket-container" style="display: flex; justify-content: center; margin-top: 5vh;">
            <div style="width: 30vw; height: fit-content; font-size: 1.2rem; height: fit-content; display: flex; flex-direction: column; align-items: center;" class="animated fade-left delay ticket-text">
                <p>TechGlow is a event organization that focuses on various events of hard techno music. <br><br>
                    we want to offer the guests the time of their lives and pull them out of the normal world, 
                    and with them we want to dive in to a special world called techglow!</p>
                <a href="https://shop.eventix.io/6bf08f3f-6d92-11ec-b3c4-9e36bf7d673e/tickets?shop_code=j47q93r9&original_referer=https%3A%2F%2Fl.instagram.com%2F" target="_blank" class="ticketBtn">Tickets</a>
            </div>
            <div style="width: fit-content;font-size: 1.2rem; margin-left: 10vw; height:fit-content; padding: 0px 40px 0px 40px; display: flex; justify-content: center; flex-direction: column; text-align: center;" class="animated fade-left delay event-agenda">
                <div style="display: flex;">
                    <h1 style="font-weight: bold;">Event Agenda</h1>
                    <font-awesome-icon v-if="isLoggedIn == true" icon="fa-solid fa-pen" class="icon" style="color: #fff; padding: 12px"/>
                    <font-awesome-icon v-if="isLoggedIn == true" icon="fa-solid fa-x" class="icon" style="color: #fff; padding: 12px"/>
                </div>
                <div style="margin-top: 1vh;" class="event-container">
                    <ul class="event-list">
                        <li class="event-item">
                            <p class="event-name">TECHGLOW X PKHS (TILBURG)</p>
                            <p class="event-time">19 August 2022 22:00 → 20 August 2022 04:00</p>
                        </li>
                        <li class="event-item">
                            <p class="event-name">TECHGLOW X LUNENBURG (LOOSBROEK)</p>
                            <p class="event-time">04 November 2022 23:00 → 05 November 2022 04:00</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section style="height: fit-content; margin-bottom: 10vh; width: 100vw;">
        <div style="display: flex; justify-content: center;">
            <h1 style="color: #C40606; font-size: 3rem; font-weight: bold;" class="animated fade-left delay">ABOUT US</h1>
        </div>
        <div class="info-container" style="display: flex; align-items: center; margin-top: 5vh; flex-direction: column;">
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">TechGlow Events</h1>
                <p>TechGlow is a event organization that focuses on various events of hard techno music. 
                    we want to offer the guests the time of their lives and pull them out of the normal world, 
                    and with them we want to dive in to a special world called TechGlow!</p>
            </div>
            <div style="height: 5vh;"></div>
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">Team</h1>
                <p>We work with a creative team that puts together a great festival with all aspects. 
                    We really want to offer the guest the best of the best every year and we go for the best Techno festival in the Netherlands. Interested?</p>
            </div>
        </div>
    </section>
    <section style="height: fit-content; margin-bottom: 10vh; width: 100vw;">
        <div style="display: flex; justify-content: center;">
            <h1 style="color: #C40606; font-size: 3rem; font-weight: bold;" class="animated fade-left delay">RULES</h1>
        </div>
        <div class="info-container" style="display: flex; align-items: center; margin-top: 5vh; flex-direction: column;">
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">Drugs & weapons</h1>
                <p>TechGlow has a zero tolerance policy. This means that visitors are prohibited to bring any forms of drugs, weapons or sharp objects into the festival.</p>
            </div>
            <div style="height: 5vh;"></div>
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">Liquids</h1>
                <p>Concerning safety issues, it is not permitted to bring any kind of liquids into the event. This also applies to deodorant, deodorant-sticks, hairspray etc.</p>
            </div>
            <div style="height: 5vh;"></div>
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">Medication</h1>
                <p>When you are using medication and you wish to bring it into the event, don’t forget to bring your doctor’s certificate. 
                    Without an official doctor’s certificate you will not be able to bring the medication into the event. Security will check your certificate at the entrance.</p>
            </div>
            <div style="height: 5vh;"></div>
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">Photo & Video</h1>
                <p>Digital photo- and videocameras, like a GoPro, are allowed at TechGlow. 
                    Websites or companies who wish to shoot professional photo or video footage need to request access beforehand. Selfie-sticks are strictly prohibited during TechGlow.</p>
            </div>
            <div style="height: 5vh;"></div>
            <div style="width: 50vw; font-size: 1.2rem" class="animated fade-left delay info-text">
                <h1 style="color: #C40606; font-weight: bold;">Promotion</h1>
                <p>Promotion for other events is strictly forbidden inside or outside Autotron. For advertising possibilities, we advise you to contact Dance Promo or the organization.</p>
            </div>
        </div>
    </section>
            <footer style="height: 15vh; background: #101010;">
                <div style="display: flex; justify-content: space-between; padding: 0 25vw 0 25vw; align-items: center;" class="footer-wrapper">
                    <div style="height: 15vh; display: flex; justify-content: center; align-items: center;">
                        <a href="#top"><img src="../assets/img/Sticker-LOGO.png" alt="logo-footer" style="height: 90px; min-width: 59px;" class="logo-footer"></a>
                    </div>
                    <div style="height: 10vh; display: flex; text-align: center; flex-direction: column; align-items: center; justify-content: center; padding: 20px">
                        <a href="mailto:info@techglow-events.nl" class="footer-link">Contact</a>
                        <a href="#top" class="footer-link">Tickets</a>
                        <a href="#top" class="footer-link">Terms and Conditions</a>
                    </div>
                    <div style="height: 10vh; display: flex; justify-content: center; align-items: center;">
                        <a href="https://www.facebook.com/Techglowevents/" target="_blank">
                            <div style=" display: flex; justify-content: center; align-items: center; height: 40px; width: 40px; border: 2px solid white; border-radius: 25px;" class="social-icon">
                                <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" style="transform: scale(1.2); color: #fff; padding: 12px"/>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/techglow_events/" target="_blank">
                            <div style=" display: flex; justify-content: center; align-items: center; height: 40px; width: 40px; border: 2px solid white; border-radius: 25px; margin-left: 10px;" class="social-icon">
                                <font-awesome-icon icon="fa-brands fa-instagram" class="icon" style="transform: scale(1.2); color: #fff; padding: 12px"/>
                            </div>
                        </a>
                        
                    </div>
                </div>
        </footer>
</template>