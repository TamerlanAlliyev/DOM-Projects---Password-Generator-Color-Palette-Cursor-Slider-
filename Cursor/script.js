const cursorOuter = document.querySelector('.cursor--outer')
const cursorInner = document.querySelector('.cursor--inner')

const btn = document.querySelector('.btn')

const { width: cWidth, height: cHeight, borderRadius: cBorderRadius, margin:cMargin } = window.getComputedStyle(cursorOuter)

window.addEventListener('mousemove', (event) => {
    const { x, y, target } = event

    const { x: btnCoordsX, y: btnCoordsY } = btn.getBoundingClientRect();
    // const cordinant = btn.getBoundingClientRect();
    // console.log(cordinant);

    cursorOuter.style.transform = `translate(${x}px,${y}px)`
    cursorInner.style.transform = `translate(${x}px,${y}px)`

    if (target.classList.contains('btn')) {
        // const buttonStyle = window.getComputedStyle(btn)
        const { width: btnWidth,
            height: btnHeight,
            borderRadius: btnBorderRadius
        } = window.getComputedStyle(btn)

        cursorOuter.style.width = btnWidth
        cursorOuter.style.height = btnHeight
        cursorOuter.style.borderRadius = btnBorderRadius

        cursorOuter.style.transform = `translate(${btnCoordsX}px,${btnCoordsY}px)`
        cursorOuter.style.margin=0;

    } else {
        cursorOuter.style.width = cWidth
        cursorOuter.style.height = cHeight
        cursorOuter.style.borderRadius = cBorderRadius

    }
})

