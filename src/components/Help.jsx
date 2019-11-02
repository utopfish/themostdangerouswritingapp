import React from "react";
import WriteButton from "./WriteButton";
import Space from "./Space";
import { Link } from "react-router-dom";

const renderQuote = ({ text, author, url }) => {
  return (
    <blockquote cite={url} key={author}>
      <p>
        <i className="icon-quote-left" />
        {text}
        <i className="icon-quote-right" />
      </p>
      <p className="author">
        &mdash; <a href={url}>{author}</a>
      </p>
    </blockquote>
  );
};

const Help = () => {
  const quotes = [
    {
      text: "Sadistic [and] brutal.",
      author: "WIRED",
      url:
        "https://www.wired.com/2016/03/sadistic-writing-app-deletes-work-stop-typing/"
    },
    {
      text: "@maebert has created the writer's nightmare machine.",
      author: "@danhklein",
      url: "https://twitter.com/danhklein/status/704701084908978176"
    },
    {
      text:
        "I am panicking just reading the description, which should count as a ringing endorsement.",
      author: "Some Guy on Metafilter",
      url:
        "http://www.metafilter.com/157549/The-Most-Frustrating-Writing-Webpage#6422455"
    }
  ];

  return (
    <div className="Help">
      <Link to="/" className="navButton backButton">
        返回
      </Link>
      <Space l />
      <div className="content">
        <div className="logo small">
          <div className="mark" />
          <h1>
            <span>最</span>
            <span>心流</span>
            <span>
              写作
              <i className="caret icon-cursor" />
            </span>
          </h1>
        </div>

        <h1>帮助文档</h1>
        <h2>这个网页能干啥?</h2>
        <p>
          最心流写作被设计来关闭你内心的编辑器，让你进入一种写作的心流状态，如果你一旦
          超过五秒没有进行编辑，之前所有的内容都将丢失，在你设置写作时间结束并且中途没
          有打扰之后，你能下载并保存你的写作内容
        </p>
        <p>
        尝试之后失败，总比完全不做要强！
        </p>

        <Space m />
        <WriteButton ghost color="red" />

        <h2>别人能读到我写的东西吗?</h2>
        <p>
          不能，你所有的写作都是私人的，不会上传或存储到任何服务器中。
        </p>
        <h2>Who made this?</h2>
        <p>
          <i className="icon-mdwa" />{" "}
          <abbr title="The Most Dangerous Writing App">MDWA</abbr> was written
          by{" "}
          <a
            href="https://www.twitter.com/maebert"
            rel="noopener noreferrer"
            target="_blank"
            title="Manuel Ebert"
          >
            Manuel Ebert
          </a>{" "}
          over two glasses of wine on a Sunday afternoon and is{" "}
          <a
            title="MDWA on Github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/maebert/themostdangerouswritingapp"
          >
            <i className="icon-github" />open source
          </a>
          .
        </p>

        <p>
          The domain <a href="https://themostdangerouswritingapp.com">themostdangerouswritingapp.com</a> has been acquired by <a href="https://www.squibler.io" title="Squibler">Squibler</a>, who now maintain and continue to develop the app.{" "}
          This is the the original version of the app, which will continue to be available at <a href="https://maebert.github.io/themostdangerouswritingapp">maebert.github.io/themostdangerouswritingapp</a>.
        </p>


        <Space l />
      </div>
    </div>
  );
};

export default Help;
