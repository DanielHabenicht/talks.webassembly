import { Component, OnInit } from '@angular/core';
// import { createPDF } from 'wasm-pdf'

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // download(){
  //     let doc: any = {
  //         title: "Example 3"
  //     };
  //     const sideMargin = 50;
  //     const [topMargin, bottomMargin] = [30, 50];
  //     const [width, height] = [842, 595]; // A4 Landscape
  //     const weeksInYear = 53;
  //     const tableWidth = width - sideMargin * 2;
  //     const weekWidth = tableWidth / weeksInYear;
  //     let margins = {
  //         top: topMargin,
  //         left: sideMargin,
  //         bottom: bottomMargin,
  //         right: sideMargin
  //     };
  //     doc.template = {
  //         size: [width, height],
  //         ...margins
  //     };
  //     // Stationary elements: footer note and page number
  //     let footer = {
  //         obj_type: "text",
  //         params: {
  //             text: "© 2020 Some Company Ltd.",
  //             font_size: 10,
  //             x: sideMargin,
  //             y: bottomMargin - 20,
  //             color: [0.9, 0.9, 0.9]
  //         }
  //     };
  //     let pageNumber = {
  //         obj_type: "pagenumber",
  //         params: {
  //             font_size: 10,
  //             x: width - sideMargin,
  //             y: bottomMargin - 20,
  //             color: [0.9, 0.9, 0.9],
  //             font_size: 10,
  //             align: "right",
  //             color: [0.9, 0.9, 0.9]
  //         }
  //     };
  //     doc.stationary = [footer, pageNumber];
  //     doc.contents = [];
  //     // Header table with logo
  //     let logoCell = {
  //         obj_type: 'cell',
  //         params: {
  //             contents: [{
  //                 obj_type: 'image',
  //                 params: {
  //                     src: "/wasm-pdf-demo/logo.jpg",
  //                     fit_width: true
  //                 }
  //             }]
  //         }
  //     };
  //     let spanCell = {
  //         obj_type: 'cell',
  //         params: {
  //             span: 7 // so that logo takes 1/8 width
  //         }
  //     }
  //     let headerRow = {
  //         obj_type: 'row',
  //         params: {
  //             cells: [logoCell, spanCell]
  //         }
  //     };
  //     let headerTable = {
  //         obj_type: 'table',
  //         params: {
  //             rows: [headerRow]
  //         }
  //     };
  //     doc.contents.push(headerTable);
  //     // Document title
  //     doc.contents.push({
  //         obj_type: 'paragraph',
  //         params: {
  //             text: "Task Calendar 2020",
  //             font_size: 16,
  //             leading: 18,
  //             font_name: "helvetica-bold"
  //         }
  //     });
  //     let table: any = {
  //         obj_type: "table",
  //         params: {
  //             style: {
  //                 grid: {
  //                     width: 0.25,
  //                     color: [0.6, 0.6, 0.6]
  //                 },
  //                 padding: {
  //                     left: 0,
  //                     right: 0,
  //                     top: 0,
  //                     bottom: 0
  //                 },
  //                 align: {
  //                     vertical: "top"
  //                 },
  //             },
  //             rows: [],
  //         },
  //     }
  //     let quartalRow: any = {
  //         obj_type: "row",
  //         params: {
  //             cells: []
  //         }
  //     };
  //     let monthRow: any = {
  //         obj_type: "row",
  //         params: {
  //             cells: []
  //         }
  //     };
  //     let weekRow: any = {
  //         obj_type: "row",
  //         params: {
  //             cells: []
  //         }
  //     };
  //     let quartals: any = [
  //         ["Q1", 14],
  //         ["Q2", 13],
  //         ["Q3", 13],
  //         ["Q4", 13]
  //     ];
  //     for (let quartal of quartals) {
  //         quartalRow.params.cells.push({
  //             obj_type: "cell",
  //             params: {
  //                 span: quartal[1],
  //                 contents: [{
  //                     obj_type: "paragraph",
  //                     params: {
  //                         text: quartal[0],
  //                         align: "center",
  //                         font_size: 8,
  //                         leading: 8,
  //                         padding: [2, 1, 0, 1],
  //                         font_name: "helvetica",
  //                     },
  //                 }, ],
  //             },
  //         });
  //     }
  //     table.params.rows.push(quartalRow);
  //     let months = [
  //         ["JANUARY", 5],
  //         ["FEBRUARY", 4],
  //         ["MARCH", 5],
  //         ["APRIL", 4],
  //         ["MAY", 4],
  //         ["JUNE", 5],
  //         ["JULY", 4],
  //         ["AUGUST", 5],
  //         ["SEPTEMBER", 4],
  //         ["OCTOBER", 4],
  //         ["NOVEBER", 5],
  //         ["DECEMBER", 4],
  //     ];
  //     for (let month of months) {
  //         monthRow.params.cells.push({
  //             obj_type: "cell",
  //             params: {
  //                 span: month[1],
  //                 contents: [{
  //                     obj_type: "paragraph",
  //                     params: {
  //                         text: month[0],
  //                         align: "center",
  //                         font_size: 8,
  //                         leading: 8,
  //                         padding: [2, 1, 0, 1],
  //                         font_name: "helvetica",
  //                     },
  //                 }, ],
  //             },
  //         });
  //     }
  //     table.params.rows.push(monthRow);
  //     for (let wk = 1; wk < weeksInYear + 1; wk++) {
  //         weekRow.params.cells.push({
  //             obj_type: "cell",
  //             params: {
  //                 contents: [{
  //                     obj_type: "paragraph",
  //                     params: {
  //                         text: `${wk}`,
  //                         align: "center",
  //                         font_size: 8,
  //                         leading: 8,
  //                         padding: [2, 1, 0, 1],
  //                         font_name: "helvetica",
  //                     },
  //                 }, ],
  //             },
  //         });
  //     }
  //     table.params.rows.push(weekRow);
  //     let brownCategoryRow = {
  //         obj_type: "row",
  //         params: {
  //             cells: [{
  //                 obj_type: "cell",
  //                 params: {
  //                     style: {
  //                         background_color: [191 / 256, 112 / 256, 42 / 256]
  //                     },
  //                     contents: [{
  //                         obj_type: "paragraph",
  //                         params: {
  //                             text: 'Brown Category',
  //                             font_size: 10,
  //                             leading: 10,
  //                             padding: [2, 5, 2, 5],
  //                             font_name: "helvetica-bold",
  //                             color: [1, 1, 1]
  //                         },
  //                     }, ],
  //                 },
  //             }]
  //         }
  //     };
  //     table.params.rows.push(brownCategoryRow);
  //     let productARow: any = generateEmptyRow(weeksInYear);
  //     productARow.params.cells[9].params.contents[0].params.text = "Product launch week 10"
  //     productARow.params.cells[9].params.contents.push({
  //         obj_type: "path",
  //         params: {
  //             points: [
  //                 [0, 3],
  //                 [0, 0],
  //                 [weekWidth * 3, 0],
  //                 [weekWidth * 3, 3]
  //             ],
  //             stroke_width: 0,
  //             fill_color: [191 / 256, 112 / 256, 42 / 256],
  //             align: "left",
  //         }
  //     });
  //     table.params.rows.push(productARow);
  //     let vacationRow: any = generateEmptyRow(weeksInYear);
  //     vacationRow.params.cells[27].params.contents[0].params.text = "Summer vacation"
  //     vacationRow.params.cells[27].params.contents.push({
  //         obj_type: "path",
  //         params: {
  //             points: [
  //                 [0, 3],
  //                 [0, 0],
  //                 [weekWidth * 4, 0],
  //                 [weekWidth * 4, 3]
  //             ],
  //             stroke_width: 0,
  //             fill_color: [191 / 256, 112 / 256, 42 / 256],
  //             align: "left",
  //         }
  //     });
  //     table.params.rows.push(vacationRow);
  //     let greenCategoryRow = {
  //         obj_type: "row",
  //         params: {
  //             cells: [{
  //                 obj_type: "cell",
  //                 params: {
  //                     style: {
  //                         background_color: [144 / 256, 217 / 256, 72 / 256]
  //                     },
  //                     contents: [{
  //                         obj_type: "paragraph",
  //                         params: {
  //                             text: 'Green Category',
  //                             font_size: 10,
  //                             leading: 10,
  //                             padding: [2, 5, 2, 5],
  //                             font_name: "helvetica-bold"
  //                         },
  //                     }, ],
  //                 },
  //             }]
  //         }
  //     };
  //     table.params.rows.push(greenCategoryRow);
  //     let tvCampaignRow: any = generateEmptyRow(weeksInYear);
  //     tvCampaignRow.params.cells[18].params.contents[0].params.text = "TV Campaign"
  //     tvCampaignRow.params.cells[18].params.contents.push({
  //         obj_type: "path",
  //         params: {
  //             points: [
  //                 [0, 3],
  //                 [0, 0],
  //                 [weekWidth * 10, 0],
  //                 [weekWidth * 10, 3]
  //             ],
  //             stroke_width: 0,
  //             fill_color: [52 / 256, 115 / 256, 34 / 256],
  //             align: "left",
  //         }
  //     });
  //     tvCampaignRow.params.cells[36].params.contents[0].params.text = "Campaign Re-runs"
  //     tvCampaignRow.params.cells[36].params.contents.push({
  //         obj_type: "path",
  //         params: {
  //             points: [
  //                 [0, 3],
  //                 [0, 0],
  //                 [weekWidth * 10, 0],
  //                 [weekWidth * 10, 3]
  //             ],
  //             stroke_width: 0,
  //             fill_color: [52 / 256, 115 / 256, 34 / 256],
  //             align: "left",
  //         }
  //     });
  //     table.params.rows.push(tvCampaignRow);
  //     table.params.rows.push({
  //         obj_type: "row",
  //         params: {
  //             cells: [{
  //                 obj_type: "cell",
  //                 params: {
  //                     contents: [{
  //                         obj_type: "path",
  //                         params: {
  //                             points: [
  //                                 [weekWidth * 18, 0],
  //                                 [weekWidth * 18 + 3, 5],
  //                                 [weekWidth * 18 + 6, 0],
  //                             ],
  //                             stroke_width: 0,
  //                             fill_color: [52 / 256, 115 / 256, 34 / 256],
  //                             align: "left",
  //                         },
  //                     }, ],
  //                 },
  //             }]
  //         }
  //     });
  //     let darkGreenCategoryRow = {
  //         obj_type: "row",
  //         params: {
  //             cells: [{
  //                 obj_type: "cell",
  //                 params: {
  //                     style: {
  //                         background_color: [52 / 256, 115 / 256, 34 / 256]
  //                     },
  //                     contents: [{
  //                         obj_type: "paragraph",
  //                         params: {
  //                             text: 'TV campaign starting week 13',
  //                             font_size: 10,
  //                             leading: 10,
  //                             padding: [2, 5, 2, 5],
  //                             font_name: "helvetica-bold",
  //                             color: [1, 1, 1]
  //                         },
  //                     }, ],
  //                 },
  //             }]
  //         }
  //     };
  //     table.params.rows.push(darkGreenCategoryRow);
  //     let detailsRow = {
  //         obj_type: "row",
  //         params: {
  //             cells: [{
  //                     obj_type: "cell",
  //                     params: {
  //                         contents: [{
  //                             obj_type: "image",
  //                             params: {
  //                                 src: '/wasm-pdf-demo/pizza.jpg',
  //                                 fit_width: true
  //                             },
  //                         }, ],
  //                     },
  //                 },
  //                 {
  //                     obj_type: "cell",
  //                     params: {
  //                         span: 5,
  //                         contents: [{
  //                             obj_type: "paragraph",
  //                             params: {
  //                                 text: 'Our great product now on TV',
  //                                 font_size: 12,
  //                                 leading: 12,
  //                                 padding: [5, 5, 5, 5],
  //                                 font_name: "helvetica-bold"
  //                             },
  //                         }, {
  //                             obj_type: "paragraph",
  //                             params: {
  //                                 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Duis sem diam, rutrum ut fringilla eu, pharetra eget mi.</b> Aliquam lectus velit, sodales at nibh a, eleifend fringilla neque. Sed vitae mattis quam, ac interdum nulla. Vestibulum mattis lobortis urna, a cursus tortor. Quisque vestibulum tempus laoreet. Sed elementum ultricies sapien porta commodo. Donec sed eros in risus tempus maximus sodales pellentesque tellus.',
  //                                 font_size: 10,
  //                                 padding: [6, 5, 5, 5],
  //                                 font_name: "helvetica"
  //                             },
  //                         }],
  //                     },
  //                 },
  //             ]
  //         }
  //     };
  //     table.params.rows.push(detailsRow);
  //     doc.contents.push(table);
  //     createPDF(doc);
  // };

  // public pdfFileBlobURL = null;
  // generatePDF = (data: any) => {
  //     const blob = new Blob([data], {
  //         type: 'application/pdf'
  //     });
  //     if (pdfFileBlobURL !== null) {
  //         URL.revokeObjectURL(pdfFileBlobURL);
  //     }
  //     pdfFileBlobURL = URL.createObjectURL(blob);
  //     window.location.href = pdfFileBlobURL;
  // }

  // jsonOut = (data: any) => {
  //     console.log(JSON.stringify(data));
  // };

  // generateEmptyRow = (weeks: any) => {
  //     let emptyRow: any = {
  //         obj_type: "row",
  //         params: {
  //             cells: []
  //         }
  //     };
  //     for (let wk = 1; wk < weeks + 1; wk++) {
  //         emptyRow.params.cells.push({
  //             obj_type: "cell",
  //             params: {
  //                 contents: [{
  //                     obj_type: "paragraph",
  //                     params: {
  //                         text: "",
  //                         wrap: false,
  //                         font_size: 7,
  //                         leading: 7,
  //                         padding: [2, 1, 0, 1],
  //                         font_name: "helvetica",
  //                     },
  //                 }, ],
  //             },
  //         });
  //     }
  //     return emptyRow;
  // }
  // }

}


