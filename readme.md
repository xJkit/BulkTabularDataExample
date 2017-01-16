# Bulk Tabular Data Rendering Example

特別寫了一個專案來實際比較當 render 三種不同 Table 資料時的效能與速度快慢。

## Comparison Target
1. [HTML Table](http://www.w3schools.com/html/html_tables.asp)
2. [ant-design: Table](https://ant.design/components/table/#)
  > Based on [rc-table](https://github.com/react-component/table)
3. [FixedTableData](https://facebook.github.io/fixed-data-table/getting-started.html)
  > Facebook Official Table Data Component

## Data Format
A list of data in JSON with 10,000 objects shown below:
```javascript
[
  {
    "id": 1,
    "roomId": "587cb265dff5d489ef233a67",
    "singer": "周杰倫",
    "singerType": "男歌手",
    "songName": "consequat nulla",
    "fileName": "周杰倫_consequat nulla.mpg",
    "genre": "情歌對唱",
    "lang": "",
    "dirName": "./1/0225",
    "leadTrack": ""
  },
  {
    "id": 2,
    "roomId": "587cb265335b33d0529e0ffc",
    "singer": "孫燕姿",
    "singerType": "男歌手",
    "songName": "duis laborum",
    "fileName": "孫燕姿_duis laborum.mpg",
    "genre": "金屬",
    "lang": "日語",
    "dirName": "./2/0225",
    "leadTrack": "L"
  },
  // ... 9,998 objects left
]
```

The size of sample data is up to **2.8 MB**!!!!!
