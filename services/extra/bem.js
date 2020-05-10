export const getVersions = (version, component = "") => {
    if(version){
        if(typeof version === "string")
            return `${component}--${version}`
        if(version.constructor === Array)
            return version.map(el => el && `${component}--${el}`).filter(el => el).join(" ")
    }
    return " "
}
export const getComponentClass = (className, component = "") => {
    if(typeof className === "string"){
        if(className.includes(",")){
            const newName = className.split(",").map(el => el.trim()).filter(el => el)
            return newName.map(el => `${component}__${el}`).join(" ")
        }
        return `${component}__${className}`
    }

    if(className.constructor() === Array )
        return className.map(el => `${component}__${el}`).join(" ")

    return ` `
}