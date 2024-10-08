


function locomotineAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotineAnimation();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var p1_text = document.querySelectorAll(".text h1")
var video = document.querySelector(".video")


function loading() {
    gsap.from(p1_text, {
        y: 100,
        duration: .6,
        opacity: 0,
        stagger: .3,
        delay: .5
    })
    gsap.from(video, {
        y: 100,
        duration: .6,
        opacity: 0,
        stagger: .3,
        delay: 1,
        scale: .7
    })

}

var play = document.querySelector(".play")

function playbtn() {
    video.addEventListener("mouseenter", function () {
        gsap.to(play, {
            scale: 1,
            opacity: 1,
            duration: 1
        })
    })

    video.addEventListener("mousemove", function (dets) {
        gsap.to(play, {
            left: dets.x,
            top: dets.y
        })
    })

    video.addEventListener("mouseleave", function () {
        gsap.to(play, {
            scale: 0,
            opacity: 0,
            duration: .5
        })
    })
}


var elem = document.querySelectorAll(".elem")
gsap.to(elem, {
    opacity:1,
    scrollTrigger:{
        trigger:".page2",
        scroller: ".main",
        // markers: true,
        start : "top 40%",
        end: "top 30%",
        scrub: true
    }
})

var crsr = document.querySelector(".cursor")
document.querySelector(".main").addEventListener("mousemove", function (dets) {
    gsap.to(crsr, {
        left: dets.x,
        top: dets.y
    })
})

var child = document.querySelectorAll(".child")
function cur() {
    child.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(crsr, {
                scale: 1,
                duration: .5
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(crsr, {
                scale: 0,
                duration: .5
            })
        })
    })
}

var n1 = document.querySelector(".n1 svg")
gsap.to(".n1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger:".nav",
        scroller:".main",
        // markers: true,
        start: "top -10%",
        end: "top -1%",
        scrub: 1
    }
})

gsap.to(".n2 h3",{
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger:{
        trigger:".n2",
        scroller:".main",
        // markers: true,
        start: "top -5%",
        end:"top -1%",
        scrub: 1
    }
})

gsap.from("#child1",{
    y: 50,
    opacity: 0,
    scrollTrigger:{
        trigger: ".page3",
        scroller: ".main",
        // markers: true,
        start : "top 40%",
        end: "top 30%",
        scrub: 2
    }
})
gsap.from("#child2",{
    y: 50,
    opacity: 0,
    scrollTrigger:{
        trigger: ".page3",
        scroller: ".main",
        // markers: true,
        start : "top 40%",
        end: "top 30%",
        scrub: 2
    }
})

gsap.from("#child3",{
    y: 50,
    opacity: 0,
    scrollTrigger:{
        trigger: ".page3",
        scroller: ".main",
        // markers: true,
        start : "top -25%",
        end: "top -20%",
        scrub: 2
    }
})

gsap.from("#child4",{
    y: 50,
    opacity: 0,
    scrollTrigger:{
        trigger: ".page3",
        scroller: ".main",
        // markers: true,
        start : "top -25%",
        end: "top -20%",
        scrub: 2
    }
})

loading();
playbtn();
cur();