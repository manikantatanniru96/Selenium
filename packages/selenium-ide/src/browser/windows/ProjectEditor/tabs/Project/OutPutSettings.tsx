import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import TextField from "browser/components/UncontrolledTextField";
import React, { FC, useEffect, useState } from "react";
import { CoreSessionData, ProjectShape } from "@seleniumhq/side-api";
import message from "./Message";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";


const CustomButton = styled(Button)({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "\"Segoe UI\"",
    "Roboto",
    "\"Helvetica Neue\"",
    "Arial",
    "sans-serif",
    "\"Apple Color Emoji\"",
    "\"Segoe UI Emoji\"",
    "\"Segoe UI Symbol\""
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf"
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
  }
});




export interface OutPutSettingsProps {
  outPut: CoreSessionData["project"];
}


const OutPutSettings: FC<OutPutSettingsProps> = ({ outPut }) => {
  const [options, setOptions] = React.useState([]);
  const [host, setHost] = React.useState("http://127.0.0.1:9998");
  const [testPlatform, setTestPlatform] = React.useState("http://9.134.118.97/webUiCase/webUiCase");
  const [page, setPage] = React.useState("");
  const [insertUrl, setInsertUrl] = React.useState("/webui/case/insertCaseByIde");
  const [pageUrl, setPageUrl] = React.useState("/webui/page/allPage");
  const [languageMap, setLanguageMap] = useState<any>({
    outPutConfig: {
      webLink: "click to jump to the testing platform",
      platformUrl: "test platform address",
      platformUrlHelper: "The final use case is displayed on this front-end page",
      serviceHost: "backend service address",
      serviceHostHelper: "export the address of the use case to the backend service",
      businessListUrl: "business list url address",
      businessListUrlHelper: "url address of the business list to which the use case belongs",
      caseInBusiness: "business to which the use case belongs",
      caseInBusinessHelper: "test cases will be classified under this business",
      exportUrl: "export interface url address",
      exportUrlHelper: "export the url address of the test case",
      exportBtn: "export",
      platformError:"please enter the testing platform address!",
      checkUrlError:"please enter the backend service address and the url address for exporting the test case!",
      checkBusinessUrlError:"please check if the backend service address and the corresponding business list URL address are correct!",
      warn:"warn",
      success:"export success",
      fail:"export fail",
      caseId:"exported test case id:",
      failMessage:"please contact the backend developer for assistance!"
    }
  });

  useEffect(() => {
    window.sideAPI.system.getLanguageMap().then(result => {
      setLanguageMap(result);
    });

  }, []);

  // 跳转至测试平台
  const linkTestPlatform = (url: string) => {
    if (url == "" || url == undefined) {
      message.alertMessage({
        content: languageMap.outPutConfig.platformError,
        duration: 6000,
        type: "error",
        title: languageMap.outPutConfig.warn
      });
    } else {
      window.sideAPI.playback.openBrowser(url);
    }
  };
  /**
   * 将录制的用例导入到web项目中
   *
   * @param url 导入的url地址
   * @param project 用例所属项目
   */

  const exportToUi = async (project: ProjectShape, host: string, url: string, pageId: any) => {
    if (host === "" || url === "") {
      message.alertMessage({
        content: languageMap.outPutConfig.checkUrlError,
        duration: 6000,
        type: "error",
        title: languageMap.outPutConfig.warn
      });
    } else {
      try {
        // 克隆project对象
        let projectBackUp = JSON.parse(JSON.stringify(project));
        // 将项目id置入克隆对象中
        projectBackUp["pageId"] = pageId;
        // 创建要发送的数据对象
        const requestData = JSON.stringify(projectBackUp, undefined, 2);
        // 设置请求头部信息
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        // 构造请求参数
        const options = {
          method: "POST",
          body: requestData,
          headers: headers
        };

        // 发起POST请求并获取响应结果
        const response = await fetch(host + url, options);
        const result = await response.json();
        const code = result.code;

        if (code !== null || code !== undefined) {
          if (code === "1000") {
            message.alertMessage({
              content: languageMap.outPutConfig.caseId + result.data[0] + "!",
              duration: 5000,
              type: "success",
              title: languageMap.outPutConfig.success
            });
          } else {
            message.alertMessage({
              content: languageMap.outPutConfig.failMessage,
              duration: 5000,
              type: "error",
              title: languageMap.outPutConfig.fail
            });
          }
        }
        return result;
      } catch (error) {
        console.error(error);
      }
    }
  };
  const changeUrl = () => {
    /**
     * 根据url地址获取项目列表
     */
    fetch(host + pageUrl)
      .then(response => response.json())
      .then(data => {
        setOptions(data.data);
      }).catch(error => {
      setOptions([]);
      setPage("");
      console.log(error);
    });
  };

  const checkUrl = () => {
    /**
     * 检查url地址是否正确
     */
    if (host === "" || pageUrl === "") {
      message.alertMessage({
        content: languageMap.outPutConfig.checkBusinessUrlError,
        duration: 5000,
        type: "warning",
        title: languageMap.outPutConfig.warn
      });
    } else {
      changeUrl();
    }
  };


  return <Stack className="p-4" spacing={1}>
    <FormControl>
      <Button variant="text" onClick={() => {
        linkTestPlatform(testPlatform);
      }}>{languageMap.outPutConfig.webLink}</Button>
    </FormControl>
    <FormControl>
      <TextField
        id="host"
        label={languageMap.outPutConfig.platformUrl}
        name="host"
        helperText={languageMap.outPutConfig.platformUrlHelper}
        onChange={(e: any) => {
          setTestPlatform(e.target.value);
        }}
        size="small"
        value={testPlatform}
      />
    </FormControl>
    <FormControl>
      <TextField
        id="host"
        label={languageMap.outPutConfig.serviceHost}
        name="host"
        helperText={languageMap.outPutConfig.serviceHostHelper}
        onBlur={changeUrl}
        onChange={(e: any) => {
          setHost(e.target.value);
        }}
        size="small"
        value={host}
      />
    </FormControl>
    <FormControl>
      <TextField
        id="pageUrl"
        label={languageMap.outPutConfig.businessListUrl}
        name="pageUrl"
        helperText={languageMap.outPutConfig.businessListUrlHelper}
        onBlur={changeUrl}
        onChange={(e: any) => {
          setPageUrl(e.target.value);
        }}
        size="small"
        value={pageUrl}
      />
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small" onFocus={checkUrl}>
      <InputLabel id="select-helper-label">{languageMap.outPutConfig.caseInBusiness}</InputLabel>
      <Select
        labelId="setProject-label"
        id="page"
        value={page}
        label="page"
        onChange={(e: any) => {
          setPage(e.target.value);
        }}>

        {options.map((option: any) => (
          <MenuItem key={option.id} value={option.id}>
            {option.pageName}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{languageMap.outPutConfig.caseInBusinessHelper}</FormHelperText>
    </FormControl>
    <FormControl>
      <TextField
        id="insertUrl"
        label={languageMap.outPutConfig.exportUrl}
        name="insertUrl"
        helperText={languageMap.outPutConfig.exportUrlHelper}
        onChange={(e: any) => {
          setInsertUrl(e.target.value);
        }}
        size="small"
        value={insertUrl}
      />
    </FormControl>
    <FormControl>
      <CustomButton variant="contained" size="small" onClick={() => {
        exportToUi(outPut, host, insertUrl, page);
      }}>{languageMap.outPutConfig.exportBtn}</CustomButton>
    </FormControl>
  </Stack>;
};


export default OutPutSettings;
