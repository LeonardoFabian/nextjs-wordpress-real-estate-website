import ReactSlider from "react-slider"

export const CustomReactSlider = () => {

    // TODO : Crear un range slider = https://www.youtube.com/watch?v=CtrKTtzq2RE
    return (
        <ReactSlider 
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 100]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            pearling
            minDistance={10}
        />
    )
}