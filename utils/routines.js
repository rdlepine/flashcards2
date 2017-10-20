 export function formatDate(unixTime) {
        if(unixTime === undefined || unixTime.length === 0) return;
        const date = new Date(unixTime);
        const year = date.getFullYear();
        const month = ("0"+(date.getMonth()+1)).substr(-2);
        const day = ("0"+date.getDate()).substr(-2);
        const hour = ("0"+date.getHours()).substr(-2);
        const minutes = ("0"+date.getMinutes()).substr(-2);
        const rtnDate = `${year}-${month}-${day} ${hour}:${minutes}`;
        return rtnDate;
  };

  export function escapeRegExp(str) {
    return str.replace(/[^a-z0-9]+/gi, "-");
}
