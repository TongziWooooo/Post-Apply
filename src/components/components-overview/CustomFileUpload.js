import React, {Component} from "react";
class CustomFileUpload extends Component {
  submit(e){
    alert("yes")
    console.log("okkkkkkkkkkk")
    e.preventDefault();
    let formData = new FormData(e.target);
    fetch('http://106.13.141.114:5009/videa?user_id=12', {
      method: 'POST',
      body: formData //自动将input:file的name属性与文件对象组合成键值对
    }).then(response => console.log(response))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="file" name='file'/>
          <input type="submit" value="上传"/>
        </form>
      </div>
    )
  }
}

export default CustomFileUpload;
