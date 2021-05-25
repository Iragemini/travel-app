function formatDate( offset ) {

  const date = new Date();

  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);

  const newDate = new Date(utc + (3600000*offset));

  return newDate;
}

export default formatDate
