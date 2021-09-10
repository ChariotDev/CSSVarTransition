
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function transitionRGB(variable, target, duration = 1000, steps = 10) {

    const rgb = getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .split(",")
        .filter((x) => x.trim().length && !isNaN(x))
        .map(Number);

    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];

    if (!Number.isInteger(red) || !Number.isInteger(green) || !Number.isInteger(blue)) {
        throw `Values [${red}, ${green}, ${blue}] are illegal, please integers only. Suggest 0 - 255.`
        return;
    }

    const redTarg = target[0];
    const greenTarg = target[1];
    const blueTarg = target[2];
    const stepDuration = duration / steps;

    let loops = 0;
    
    const redStep = Math.floor((redTarg - red) / steps)
    const greenStep = Math.floor((greenTarg - green) / steps)
    const blueStep = Math.floor((blueTarg - blue) / steps)


    while (loops < steps) {
        loops += 1
        red += redStep
        green += greenStep
        blue += blueStep
        document.body.style.setProperty(
            variable, `${red}, ${green}, ${blue}`
        );
        await delay(stepDuration);
    }

    document.body.style.setProperty(
        variable, `${redTarg}, ${greenTarg}, ${blueTarg}`
    );
}

export default transitionRGB