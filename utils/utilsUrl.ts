
export const convertUrlToPageName = ( {pathName}:{pathName: string}) => {
  let value

  value = pathName.replace(/\//g, "");
  if (value == '') value = "home"

  return value
}