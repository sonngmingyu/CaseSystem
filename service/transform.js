export class HtmlDiff {
  static transform (oldT, newT, tagType) {
    let difHtml = window.prototype.getDiff(oldT, newT, tagType)
    return difHtml
  }
}

