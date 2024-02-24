import { useEffect, useState } from "react"

export const RangeSlider = ({step, min, max, value, onChange}) => {

    // TODO  Create range slider

    const [minValue, setMinValue] = useState(value ? value.min : min);
    const [maxValue, setMaxValue] = useState(value ? value.max : max);

    useEffect(() => {
        if(value) {
            setMinValue(value.min);
            setMaxValue(value.max);
        }
    }, [value]);

    const handleMinChange = e => {
        e.preventDefault();

        const newMinValue = Math.min(+e.target.value, maxValue - step);

        if(!value) setMinValue(newMinValue);
        onChange({min: newMinValue, max: maxValue});
        // setMinValue(newMinValue);
    };

    const handleMaxChange = e => {
        e.preventDefault();

        const newMaxValue = Math.max(+e.target.value, minValue + step);
        if(!value) setMaxValue(newMaxValue);
        onChange({min: minValue, max: newMaxValue});
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className="wrapper relative flex items-center pt-[1.6rem]" style={{ 
            margin: "40px calc(16px / 2)",
            height: "calc(16px + 1.6rem)"
        }}>
            <div className="input-wrapper absolute h-[16px]" style={{ 
                width: "calc(100% + 16px)",
                margin: "0 calc(16px / -2)"
            }}>
                <input 
                    type="range"
                    className="absolute w-full pointer-events-none appearance-none h-full z-[3] opacity-0 p-0"
                    value={minValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleMinChange}
                />
                <input 
                    type="range"
                    className="absolute w-full pointer-events-none appearance-none h-full z-[3] opacity-0 p-0"
                    value={maxValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleMaxChange}
                />
            </div>

            <div className="control-wrapper w-full absolute h-[16px]">
                <div className="control w-[16px] h-[16px] rounded-[50%] absolute bg-yellow-500 top-[50%] z-[2]" style={{ 
                    left: `${minPos}%`,
                    marginLeft: "calc(16px / -2)",
                    transform: "translate3d(0, -50%, 0)"
                }} />
                <div className="rail absolute w-full top-[50%] translate-y-[-50%] h-[6px] rounded-[3px] bg-gray-300">
                    <div className="inner-rail absolute h-full bg-yellow-500 opacity-[0.5]" style={{ 
                        left: `${minPos}%`,
                        right: `${100 - maxPos}%`
                    }} />
                </div>
                <div className="control w-[16px] h-[16px] rounded-[50%] absolute bg-yellow-500 top-[50%] z-[2]" style={{ 
                    left: `${maxPos}`,
                    marginLeft: "calc(16px / -2)",
                    transform: "translate3d(0, -50%, 0)"
                }} />               
            </div>
        </div>
    );
};