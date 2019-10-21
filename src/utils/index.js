import {Str} from './data'
//content文字转化成数组
export function filterContent(content = '') {
    let contentArr = [];
    let contentStr = content;
    if (contentStr.indexOf("\\n") > -1) {
      contentStr = contentStr.replace(
        /\n/g,
        "<br/>"
      );
    } else {
      contentStr = contentStr.replace(
        /\s+/g,
        "<br/>"
      );
    }
    if (contentStr.indexOf("<br/>") > -1) {
      let temp = contentStr.split("<br/>");
      temp.forEach(item => {
        item = item.replace(/(^\s*)|(\s*)$/g, "");
        if (item != '') {
          contentArr.push(item);
        }
      });
    } else if (contentStr.indexOf("<br>") > -1) {
      let temp = contentStr.split("<br>");
      temp.forEach(item => {
        item = item.replace(/(^\s*)|(\s*)$/g, "");
        if (item != '') {
          contentArr.push(item);
        }
      });
    } else {
      contentArr.push(contentStr);
    }
    return contentArr
  
  }