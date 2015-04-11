var OGD_1_3_Module_Factory = function () {
  var OGD = {
    n: 'OGD',
    dens: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD',
    tis: [{
        ln: 'OrSearchExpression',
        bti: '.BooleanSearchExpression'
      }, {
        ln: 'TDocumentReferences',
        tn: 'T_DocumentReferences',
        ps: [{
            n: 'ogdDocumentReference',
            col: true,
            en: 'OGDDocumentReference',
            ti: '.TOGDDocumentReference'
          }]
      }, {
        ln: 'TError',
        tn: 'T_Error',
        ps: [{
            n: 'applikation',
            en: {
              lp: 'Applikation'
            }
          }, {
            n: 'message',
            en: {
              lp: 'Message'
            }
          }, {
            n: 'errorType',
            ti: 'Int',
            an: {
              lp: 'errorType'
            },
            t: 'a'
          }]
      }, {
        ln: 'TOGDDocumentReference',
        tn: 'T_OGDDocumentReference',
        ps: [{
            n: 'applikation',
            en: 'Applikation'
          }, {
            n: 'dokumentnummer',
            en: 'Dokumentnummer'
          }, {
            n: 'artikelParagraphAnlage',
            en: 'ArtikelParagraphAnlage'
          }, {
            n: 'kurzinformation',
            en: 'Kurzinformation'
          }, {
            n: 'dokumentUrl',
            en: 'DokumentUrl'
          }]
      }, {
        ln: 'TOGDSearchRequest',
        tn: 'T_OGDSearchRequest',
        ps: [{
            n: 'suchworte',
            en: 'Suchworte',
            ti: '.SearchExpression'
          }, {
            n: 'titel',
            en: 'Titel',
            ti: '.SearchExpression'
          }, {
            n: 'index',
            en: 'Index',
            ti: '.SearchExpression'
          }, {
            n: 'abschnitt',
            en: 'Abschnitt',
            ti: '.NormabschnittSucheinschraenkung'
          }, {
            n: 'fassungVom',
            en: 'FassungVom',
            ti: 'Calendar'
          }, {
            n: 'kundmachungsorgan',
            en: 'Kundmachungsorgan',
            ti: '.PhraseSearchExpression'
          }, {
            n: 'kundmachungsorgannummer',
            en: 'Kundmachungsorgannummer',
            ti: '.PhraseSearchExpression'
          }, {
            n: 'imRisSeit',
            en: 'ImRisSeit'
          }, {
            n: 'dokumenteProSeite',
            en: 'DokumenteProSeite'
          }, {
            n: 'seitennummer',
            en: 'Seitennummer',
            ti: 'Int'
          }, {
            n: 'sortierung',
            en: 'Sortierung',
            ti: '.BundesnormenSortExpression'
          }]
      }, {
        ln: 'NormabschnittSucheinschraenkung',
        ps: [{
            n: 'nummerVon',
            en: 'NummerVon',
            ti: 'Int'
          }, {
            n: 'buchstabeVon',
            en: 'BuchstabeVon'
          }, {
            n: 'nummerBis',
            en: 'NummerBis',
            ti: 'Int'
          }, {
            n: 'buchstabeBis',
            en: 'BuchstabeBis'
          }, {
            n: 'typ',
            en: 'Typ'
          }]
      }, {
        ln: 'ArrayOfSearchExpression',
        ps: [{
            n: 'searchExpression',
            col: true,
            en: 'SearchExpression',
            ti: '.SearchExpression'
          }]
      }, {
        ln: 'NotSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'expression',
            en: 'Expression',
            ti: '.SearchExpression'
          }]
      }, {
        ln: 'SearchExpression'
      }, {
        ln: 'TermSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'value',
            en: 'Value'
          }]
      }, {
        ln: 'BundesnormenSortExpression',
        ps: [{
            n: 'sortDirection',
            en: 'SortDirection'
          }, {
            n: 'sortedByColumn',
            en: 'SortedByColumn'
          }]
      }, {
        ln: 'BooleanSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'expressions',
            en: 'Expressions',
            ti: '.ArrayOfSearchExpression'
          }]
      }, {
        ln: 'AndSearchExpression',
        bti: '.BooleanSearchExpression'
      }, {
        ln: 'PhraseSearchExpression',
        bti: '.SearchExpression',
        ps: [{
            n: 'value',
            en: 'Value'
          }]
      }, {
        ln: 'Hits',
        tn: null,
        ps: [{
            n: 'value',
            ti: 'Integer',
            t: 'v'
          }, {
            n: 'pageNumber',
            ti: 'Integer',
            an: {
              lp: 'pageNumber'
            },
            t: 'a'
          }, {
            n: 'pageSize',
            ti: 'Integer',
            an: {
              lp: 'pageSize'
            },
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'BundesnormenSortableColumn',
        vs: ['ArtikelParagraphAnlage', 'Kurzinformation']
      }, {
        t: 'enum',
        ln: 'ChangeSetInterval',
        vs: ['Undefined', 'EinerWoche', 'ZweiWochen', 'EinemMonat', 'DreiMonaten', 'SechsMonaten', 'EinemJahr']
      }, {
        t: 'enum',
        ln: 'WebSortDirection',
        vs: ['Ascending', 'Descending']
      }, {
        t: 'enum',
        ln: 'NormabschnittTyp',
        vs: ['Alle', 'Artikel', 'Paragraph', 'Anlage']
      }, {
        t: 'enum',
        ln: 'PageSize',
        vs: ['Ten', 'Twenty', 'Fifty', 'OneHundred']
      }, {
        t: 'enum',
        ln: 'TApplikation',
        vs: ['Bundesrecht']
      }],
    eis: [{
        en: 'OGDSearchRequest',
        ti: '.TOGDSearchRequest'
      }, {
        en: 'DokumentUrl'
      }, {
        en: 'Applikation'
      }, {
        en: 'ArtikelParagraphAnlage'
      }, {
        en: 'Kurzinformation'
      }, {
        en: 'DocumentReferences',
        ti: '.TDocumentReferences'
      }, {
        en: 'Dokumentnummer'
      }, {
        en: 'Hits',
        ti: '.Hits'
      }, {
        en: 'OGDDocumentReference',
        ti: '.TOGDDocumentReference'
      }]
  };
  var OGD_DocumentResponse = {
    n: 'OGD_DocumentResponse',
    deps: ['OGD'],
    tis: [{
        ln: 'Schluss',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'TOGDSearchResult.SearchDocumentsResult',
        tn: null,
        ps: [{
            n: 'hits',
            en: {
              lp: 'Hits',
              ns: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD'
            },
            ti: 'OGD.Hits'
          }, {
            n: 'documentReferences',
            en: {
              lp: 'DocumentReferences',
              ns: 'http:\/\/ris.bka.gv.at\/Search\/1.3\/OGD'
            },
            ti: 'OGD.TDocumentReferences'
          }]
      }, {
        ln: 'Tr',
        tn: null,
        ps: [{
            n: 'thOrTd',
            col: true,
            etis: [{
                en: {
                  lp: 'th'
                },
                ti: '.Th'
              }, {
                en: {
                  lp: 'td'
                },
                ti: '.Td'
              }],
            t: 'es'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'height',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'TWebDocumentContentUrl',
        tn: 'T_WebDocumentContentUrl',
        ps: [{
            n: 'dataType',
            en: {
              lp: 'DataType'
            }
          }, {
            n: 'url',
            en: {
              lp: 'Url'
            }
          }]
      }, {
        ln: 'Ziffernliste',
        tn: null,
        ps: [{
            n: 'listelemOrLiteralisteOrSubliteraliste',
            col: true,
            etis: [{
                en: {
                  lp: 'listelem'
                },
                ti: '.Listelem'
              }, {
                en: {
                  lp: 'literaliste'
                },
                ti: '.Literaliste'
              }, {
                en: {
                  lp: 'subliteraliste'
                },
                ti: '.Subliteraliste'
              }, {
                en: {
                  lp: 'strichliste'
                },
                ti: '.Strichliste'
              }, {
                en: {
                  lp: 'schluss'
                },
                ti: '.Schluss'
              }],
            t: 'es'
          }, {
            n: 'ebene',
            ti: 'Integer',
            an: {
              lp: 'ebene'
            },
            t: 'a'
          }]
      }, {
        ln: 'Literaliste',
        tn: null,
        ps: [{
            n: 'listelemOrSubliteralisteOrStrichliste',
            col: true,
            etis: [{
                en: {
                  lp: 'listelem'
                },
                ti: '.Listelem'
              }, {
                en: {
                  lp: 'subliteraliste'
                },
                ti: '.Subliteraliste'
              }, {
                en: {
                  lp: 'strichliste'
                },
                ti: '.Strichliste'
              }, {
                en: {
                  lp: 'schluss'
                },
                ti: '.Schluss'
              }],
            t: 'es'
          }, {
            n: 'ebene',
            ti: 'Integer',
            an: {
              lp: 'ebene'
            },
            t: 'a'
          }]
      }, {
        ln: 'Euro',
        tn: null
      }, {
        ln: 'Fntext',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'nr',
            ti: 'Integer',
            an: {
              lp: 'nr'
            },
            t: 'a'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Sub',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Amp',
        tn: null
      }, {
        ln: 'Table',
        tn: null,
        ps: [{
            n: 'caption',
            en: {
              lp: 'caption'
            },
            ti: '.Caption'
          }, {
            n: 'trOrColOrColgroup',
            col: true,
            etis: [{
                en: {
                  lp: 'tr'
                },
                ti: '.Tr'
              }, {
                en: {
                  lp: 'col'
                },
                ti: '.Col'
              }, {
                en: {
                  lp: 'colgroup'
                },
                ti: '.Colgroup'
              }, {
                en: {
                  lp: 'thead'
                },
                ti: '.Thead'
              }, {
                en: {
                  lp: 'tfoot'
                },
                ti: '.Tfoot'
              }, {
                en: {
                  lp: 'tbody'
                },
                ti: '.Tbody'
              }],
            t: 'es'
          }, {
            n: 'id',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'twips',
            an: {
              lp: 'twips'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: 'cols',
            an: {
              lp: 'cols'
            },
            t: 'a'
          }, {
            n: 'border',
            an: {
              lp: 'border'
            },
            t: 'a'
          }, {
            n: 'frame',
            an: {
              lp: 'frame'
            },
            t: 'a'
          }, {
            n: 'rules',
            an: {
              lp: 'rules'
            },
            t: 'a'
          }, {
            n: 'cellspacing',
            an: {
              lp: 'cellspacing'
            },
            t: 'a'
          }, {
            n: 'cellpadding',
            an: {
              lp: 'cellpadding'
            },
            t: 'a'
          }]
      }, {
        ln: 'TOGDSearchResult',
        tn: 'T_OGDSearchResult',
        ps: [{
            n: 'error',
            en: {
              lp: 'Error'
            },
            ti: 'OGD.TError'
          }, {
            n: 'searchDocumentsResult',
            en: {
              lp: 'SearchDocumentsResult'
            },
            ti: '.TOGDSearchResult.SearchDocumentsResult'
          }, {
            n: 'status',
            an: {
              lp: 'status'
            },
            t: 'a'
          }]
      }, {
        ln: 'Nutzdaten',
        tn: null,
        ps: [{
            n: 'fnen',
            en: {
              lp: 'fnen'
            },
            ti: '.Fnen'
          }, {
            n: 'abschnitt',
            col: true,
            en: {
              lp: 'abschnitt'
            },
            ti: '.Abschnitt'
          }]
      }, {
        ln: 'Gdash',
        tn: null
      }, {
        ln: 'Sbquo',
        tn: null
      }, {
        ln: 'Abstand',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'halign',
            an: {
              lp: 'halign'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Tbody',
        tn: null,
        ps: [{
            n: 'tr',
            col: true,
            en: {
              lp: 'tr'
            },
            ti: '.Tr'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Thead',
        tn: null,
        ps: [{
            n: 'tr',
            col: true,
            en: {
              lp: 'tr'
            },
            ti: '.Tr'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Col',
        tn: null,
        ps: [{
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'span',
            an: {
              lp: 'span'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Nbsp',
        tn: null
      }, {
        ln: 'Pdeinst',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'tab'
            },
            ti: '.Tab',
            t: 'er'
          }, {
            n: 'formatname',
            an: {
              lp: 'formatname'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'size',
            an: {
              lp: 'size'
            },
            t: 'a'
          }, {
            n: 'bold',
            an: {
              lp: 'bold'
            },
            t: 'a'
          }, {
            n: 'italic',
            an: {
              lp: 'italic'
            },
            t: 'a'
          }, {
            n: 'underline',
            an: {
              lp: 'underline'
            },
            t: 'a'
          }, {
            n: 'underlinecolor',
            an: {
              lp: 'underlinecolor'
            },
            t: 'a'
          }, {
            n: 'strikethrough',
            an: {
              lp: 'strikethrough'
            },
            t: 'a'
          }, {
            n: 'doublestrikethrough',
            an: {
              lp: 'doublestrikethrough'
            },
            t: 'a'
          }, {
            n: 'outline',
            an: {
              lp: 'outline'
            },
            t: 'a'
          }, {
            n: 'emboss',
            an: {
              lp: 'emboss'
            },
            t: 'a'
          }, {
            n: 'shadow',
            an: {
              lp: 'shadow'
            },
            t: 'a'
          }, {
            n: 'hidden',
            an: {
              lp: 'hidden'
            },
            t: 'a'
          }, {
            n: 'smallcaps',
            an: {
              lp: 'smallcaps'
            },
            t: 'a'
          }, {
            n: 'allcaps',
            an: {
              lp: 'allcaps'
            },
            t: 'a'
          }, {
            n: 'color',
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'engrave',
            an: {
              lp: 'engrave'
            },
            t: 'a'
          }, {
            n: 'superscript',
            an: {
              lp: 'superscript'
            },
            t: 'a'
          }, {
            n: 'subscript',
            an: {
              lp: 'subscript'
            },
            t: 'a'
          }, {
            n: 'scaling',
            an: {
              lp: 'scaling'
            },
            t: 'a'
          }, {
            n: 'kerning',
            an: {
              lp: 'kerning'
            },
            t: 'a'
          }, {
            n: 'animation',
            an: {
              lp: 'animation'
            },
            t: 'a'
          }, {
            n: 'leftindent',
            an: {
              lp: 'leftindent'
            },
            t: 'a'
          }, {
            n: 'rightindent',
            an: {
              lp: 'rightindent'
            },
            t: 'a'
          }, {
            n: 'spacebefore',
            an: {
              lp: 'spacebefore'
            },
            t: 'a'
          }, {
            n: 'spacebeforeauto',
            an: {
              lp: 'spacebeforeauto'
            },
            t: 'a'
          }, {
            n: 'spaceafter',
            an: {
              lp: 'spaceafter'
            },
            t: 'a'
          }, {
            n: 'spaceafterauto',
            an: {
              lp: 'spaceafterauto'
            },
            t: 'a'
          }, {
            n: 'linespacingrule',
            an: {
              lp: 'linespacingrule'
            },
            t: 'a'
          }, {
            n: 'alignment',
            an: {
              lp: 'alignment'
            },
            t: 'a'
          }, {
            n: 'widowcontrol',
            an: {
              lp: 'widowcontrol'
            },
            t: 'a'
          }, {
            n: 'keepwithnext',
            an: {
              lp: 'keepwithnext'
            },
            t: 'a'
          }, {
            n: 'keeptogether',
            an: {
              lp: 'keeptogether'
            },
            t: 'a'
          }, {
            n: 'pagebreakbefore',
            an: {
              lp: 'pagebreakbefore'
            },
            t: 'a'
          }, {
            n: 'nolinenumber',
            an: {
              lp: 'nolinenumber'
            },
            t: 'a'
          }, {
            n: 'hyphenation',
            an: {
              lp: 'hyphenation'
            },
            t: 'a'
          }, {
            n: 'firstlineindent',
            an: {
              lp: 'firstlineindent'
            },
            t: 'a'
          }, {
            n: 'outlinelevel',
            an: {
              lp: 'outlinelevel'
            },
            t: 'a'
          }, {
            n: 'characterunitleftindent',
            an: {
              lp: 'characterunitleftindent'
            },
            t: 'a'
          }, {
            n: 'characterunitrightindent',
            an: {
              lp: 'characterunitrightindent'
            },
            t: 'a'
          }, {
            n: 'characterunitfirstlineindent',
            an: {
              lp: 'characterunitfirstlineindent'
            },
            t: 'a'
          }, {
            n: 'lineunitbefore',
            an: {
              lp: 'lineunitbefore'
            },
            t: 'a'
          }, {
            n: 'lineunitafter',
            an: {
              lp: 'lineunitafter'
            },
            t: 'a'
          }]
      }, {
        ln: 'Textbox',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'format',
            an: {
              lp: 'format'
            },
            t: 'a'
          }]
      }, {
        ln: 'TWebDocumentContentReference',
        tn: 'T_WebDocumentContentReference',
        ps: [{
            n: 'contentType',
            en: {
              lp: 'ContentType'
            }
          }, {
            n: 'name',
            en: {
              lp: 'Name'
            }
          }, {
            n: 'dataType',
            en: {
              lp: 'DataType'
            }
          }, {
            n: 'risdok',
            en: {
              lp: 'risdok'
            },
            ti: '.Risdok'
          }, {
            n: 'base64',
            en: {
              lp: 'base64'
            },
            ti: 'Base64Binary'
          }]
      }, {
        ln: 'Tm',
        tn: null
      }, {
        ln: 'N',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Fnzeichen',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'feld'
            },
            ti: '.Feld',
            t: 'er'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Tfoot',
        tn: null,
        ps: [{
            n: 'tr',
            col: true,
            en: {
              lp: 'tr'
            },
            ti: '.Tr'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Binary',
        tn: null,
        ps: [{
            n: 'src',
            en: {
              lp: 'src'
            }
          }, {
            n: 'base64',
            en: {
              lp: 'base64'
            },
            ti: 'Base64Binary'
          }, {
            n: 'beschr',
            en: {
              lp: 'beschr'
            },
            ti: '.Beschr'
          }, {
            n: 'nr',
            ti: 'Integer',
            an: {
              lp: 'nr'
            },
            t: 'a'
          }, {
            n: 'datatype',
            an: {
              lp: 'datatype'
            },
            t: 'a'
          }, {
            n: 'shapetype',
            an: {
              lp: 'shapetype'
            },
            t: 'a'
          }, {
            n: 'filename',
            an: {
              lp: 'filename'
            },
            t: 'a'
          }, {
            n: 'height',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'brightness',
            an: {
              lp: 'brightness'
            },
            t: 'a'
          }, {
            n: 'contrast',
            an: {
              lp: 'contrast'
            },
            t: 'a'
          }, {
            n: 'oleclass',
            an: {
              lp: 'oleclass'
            },
            t: 'a'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'alt',
            an: {
              lp: 'alt'
            },
            t: 'a'
          }, {
            n: 'left',
            an: {
              lp: 'left'
            },
            t: 'a'
          }, {
            n: 'top',
            an: {
              lp: 'top'
            },
            t: 'a'
          }, {
            n: 'hpos',
            an: {
              lp: 'hpos'
            },
            t: 'a'
          }, {
            n: 'vpos',
            an: {
              lp: 'vpos'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }]
      }, {
        ln: 'I',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Caption',
        tn: null,
        ps: [{
            n: 'ueberschriftOrAbsatzOrAusgabe',
            col: true,
            etis: [{
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }],
            t: 'es'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }]
      }, {
        ln: 'TArrayOfWebDocumentContentUrl',
        tn: 'T_ArrayOfWebDocumentContentUrl',
        ps: [{
            n: 'contentUrl',
            col: true,
            en: {
              lp: 'ContentUrl'
            },
            ti: '.TWebDocumentContentUrl'
          }]
      }, {
        ln: 'Ueberschrift',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'halign',
            an: {
              lp: 'halign'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Absatz',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'halign',
            an: {
              lp: 'halign'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Subliteraliste',
        tn: null,
        ps: [{
            n: 'listelemOrStrichlisteOrSchluss',
            col: true,
            etis: [{
                en: {
                  lp: 'listelem'
                },
                ti: '.Listelem'
              }, {
                en: {
                  lp: 'strichliste'
                },
                ti: '.Strichliste'
              }, {
                en: {
                  lp: 'schluss'
                },
                ti: '.Schluss'
              }],
            t: 'es'
          }, {
            n: 'ebene',
            ti: 'Integer',
            an: {
              lp: 'ebene'
            },
            t: 'a'
          }]
      }, {
        ln: 'Td',
        tn: null,
        ps: [{
            n: 'ueberschriftOrAbsatzOrAusgabe',
            col: true,
            etis: [{
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'pre'
                },
                ti: '.Pre'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }, {
                en: {
                  lp: 'div'
                },
                ti: '.Div'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }],
            t: 'es'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            an: {
              lp: 'height'
            },
            t: 'a'
          }, {
            n: 'twips',
            an: {
              lp: 'twips'
            },
            t: 'a'
          }, {
            n: 'axis',
            an: {
              lp: 'axis'
            },
            t: 'a'
          }, {
            n: 'axes',
            an: {
              lp: 'axes'
            },
            t: 'a'
          }, {
            n: 'nowrap',
            an: {
              lp: 'nowrap'
            },
            t: 'a'
          }, {
            n: 'rowspan',
            an: {
              lp: 'rowspan'
            },
            t: 'a'
          }, {
            n: 'colspan',
            an: {
              lp: 'colspan'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Em',
        tn: null
      }, {
        ln: 'Uchar',
        tn: null,
        ps: [{
            n: 'code',
            an: {
              lp: 'code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Lt',
        tn: null
      }, {
        ln: 'Betragliste',
        tn: null,
        ps: [{
            n: 'listelem',
            col: true,
            en: {
              lp: 'listelem'
            },
            ti: '.Listelem'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }]
      }, {
        ln: 'Rsquo',
        tn: null
      }, {
        ln: 'Ausgabe',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'adid'
                },
                ti: '.Adid'
              }, {
                en: {
                  lp: 'adtext'
                },
                ti: '.Adtext'
              }, {
                en: {
                  lp: 'addat'
                },
                ti: '.Addat'
              }],
            t: 'ers'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Addat',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'BlockType',
        tn: 'blockType',
        ps: [{
            n: 'ueberschriftOrAbsatzOrAusgabe',
            col: true,
            etis: [{
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'pre'
                },
                ti: '.Pre'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }, {
                en: {
                  lp: 'div'
                },
                ti: '.Div'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }],
            t: 'es'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'Kzinhalt',
        tn: null,
        ps: [{
            n: 'ueberschriftOrAbsatzOrAusgabe',
            col: true,
            etis: [{
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }],
            t: 'es'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'TOGDWebDocument',
        tn: 'T_OGDWebDocument',
        ps: [{
            n: 'applikation',
            en: {
              lp: 'Applikation'
            }
          }, {
            n: 'dokumentnummer',
            en: {
              lp: 'Dokumentnummer'
            }
          }, {
            n: 'kurztitel',
            en: {
              lp: 'Kurztitel'
            }
          }, {
            n: 'kundmachungsorgan',
            en: {
              lp: 'Kundmachungsorgan'
            }
          }, {
            n: 'typ',
            en: {
              lp: 'Typ'
            }
          }, {
            n: 'artikelParagraphAnlage',
            en: {
              lp: 'ArtikelParagraphAnlage'
            }
          }, {
            n: 'inkrafttretedatum',
            mx: false,
            dom: false,
            en: {
              lp: 'Inkrafttretedatum'
            },
            ti: 'Calendar',
            t: 'er'
          }, {
            n: 'ausserkrafttretedatum',
            mx: false,
            dom: false,
            en: {
              lp: 'Ausserkrafttretedatum'
            },
            ti: 'Calendar',
            t: 'er'
          }, {
            n: 'abkuerzung',
            en: {
              lp: 'Abkuerzung'
            }
          }, {
            n: 'unterzeichnungsdatum',
            mx: false,
            dom: false,
            en: {
              lp: 'Unterzeichnungsdatum'
            },
            ti: 'Calendar',
            t: 'er'
          }, {
            n: 'indizes',
            en: {
              lp: 'Indizes'
            },
            ti: '.TArrayOfString'
          }, {
            n: 'uebergangsrecht',
            en: {
              lp: 'Uebergangsrecht'
            }
          }, {
            n: 'beachteZurGanzenRechtsvorschrift',
            en: {
              lp: 'BeachteZurGanzenRechtsvorschrift'
            }
          }, {
            n: 'beachte',
            en: {
              lp: 'Beachte'
            }
          }, {
            n: 'aenderung',
            en: {
              lp: 'Aenderung'
            }
          }, {
            n: 'langtitel',
            en: {
              lp: 'Langtitel'
            }
          }, {
            n: 'sprachen',
            en: {
              lp: 'Sprachen'
            }
          }, {
            n: 'staaten',
            en: {
              lp: 'Staaten'
            }
          }, {
            n: 'anmerkungZurGanzenRechtsvorschrift',
            en: {
              lp: 'AnmerkungZurGanzenRechtsvorschrift'
            }
          }, {
            n: 'anmerkung',
            en: {
              lp: 'Anmerkung'
            }
          }, {
            n: 'schlagworte',
            en: {
              lp: 'Schlagworte'
            }
          }, {
            n: 'veroeffentlichungsdatum',
            mx: false,
            dom: false,
            en: {
              lp: 'Veroeffentlichungsdatum'
            },
            ti: 'Calendar',
            t: 'er'
          }, {
            n: 'aenderungsdatum',
            mx: false,
            dom: false,
            en: {
              lp: 'Aenderungsdatum'
            },
            ti: 'Calendar',
            t: 'er'
          }, {
            n: 'gesetzesnummer',
            en: {
              lp: 'Gesetzesnummer'
            }
          }, {
            n: 'alteDokumentnummer',
            en: {
              lp: 'AlteDokumentnummer'
            }
          }, {
            n: 'dokumentinhalt',
            en: {
              lp: 'Dokumentinhalt'
            },
            ti: '.TArrayOfWebDocumentContentReference'
          }]
      }, {
        ln: 'Gt',
        tn: null
      }, {
        ln: 'Link',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'href',
            an: {
              lp: 'href'
            },
            t: 'a'
          }, {
            n: 'target',
            an: {
              lp: 'target'
            },
            t: 'a'
          }]
      }, {
        ln: 'Adtext',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Risdok',
        tn: null,
        ps: [{
            n: 'metadaten',
            en: {
              lp: 'metadaten'
            },
            ti: 'AnyType'
          }, {
            n: 'nutzdaten',
            en: {
              lp: 'nutzdaten'
            },
            ti: '.Nutzdaten'
          }, {
            n: 'layoutdaten',
            en: {
              lp: 'layoutdaten'
            },
            ti: '.Layoutdaten'
          }, {
            n: 'stylesheet',
            an: {
              lp: 'stylesheet'
            },
            t: 'a'
          }, {
            n: 'hVersion',
            an: {
              lp: 'h-version'
            },
            t: 'a'
          }, {
            n: 'hCreator',
            an: {
              lp: 'h-creator'
            },
            t: 'a'
          }, {
            n: 'hCreated',
            an: {
              lp: 'h-created'
            },
            t: 'a'
          }]
      }, {
        ln: 'Aw',
        tn: null
      }, {
        ln: 'Betraglistetgue',
        tn: null,
        ps: [{
            n: 'listelem',
            col: true,
            en: {
              lp: 'listelem'
            },
            ti: '.Listelem'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }]
      }, {
        ln: 'U',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Ldquo',
        tn: null
      }, {
        ln: 'B',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Inhaltsvz',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'halign',
            an: {
              lp: 'halign'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Gldsym',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Listelem',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'symbol'
                },
                ti: '.Symbol'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Colgroup',
        tn: null,
        ps: [{
            n: 'col',
            col: true,
            en: {
              lp: 'col'
            },
            ti: '.Col'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'span',
            an: {
              lp: 'span'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Fzinhalt',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }],
            t: 'ers'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'abschnittnr',
            an: {
              lp: 'abschnittnr'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Bdash',
        tn: null
      }, {
        ln: 'Lsquo',
        tn: null
      }, {
        ln: 'Unterschrift',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'halign',
            an: {
              lp: 'halign'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Th',
        tn: null,
        ps: [{
            n: 'ueberschriftOrAbsatzOrAusgabe',
            col: true,
            etis: [{
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }, {
                en: {
                  lp: 'div'
                },
                ti: '.Div'
              }],
            t: 'es'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'lang',
            an: {
              lp: 'lang'
            },
            t: 'a'
          }, {
            n: 'dir',
            an: {
              lp: 'dir'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'hStart',
            an: {
              lp: 'h-start'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'axis',
            an: {
              lp: 'axis'
            },
            t: 'a'
          }, {
            n: 'axes',
            an: {
              lp: 'axes'
            },
            t: 'a'
          }, {
            n: 'nowrap',
            an: {
              lp: 'nowrap'
            },
            t: 'a'
          }, {
            n: 'rowspan',
            an: {
              lp: 'rowspan'
            },
            t: 'a'
          }, {
            n: 'colspan',
            an: {
              lp: 'colspan'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: '_char',
            an: {
              lp: 'char'
            },
            t: 'a'
          }, {
            n: 'charoff',
            an: {
              lp: 'charoff'
            },
            t: 'a'
          }, {
            n: 'valign',
            an: {
              lp: 'valign'
            },
            t: 'a'
          }]
      }, {
        ln: 'Tab',
        tn: null,
        ps: [{
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: 'position',
            an: {
              lp: 'position'
            },
            t: 'a'
          }, {
            n: 'leader',
            an: {
              lp: 'leader'
            },
            t: 'a'
          }]
      }, {
        ln: 'TError',
        tn: 'T_Error',
        ps: [{
            n: 'applikation',
            en: {
              lp: 'Applikation'
            }
          }, {
            n: 'message',
            en: {
              lp: 'Message'
            }
          }, {
            n: 'errorType',
            ti: 'Int',
            an: {
              lp: 'errorType'
            },
            t: 'a'
          }]
      }, {
        ln: 'Br',
        tn: null,
        ps: [{
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }]
      }, {
        ln: 'Fnen',
        tn: null,
        ps: [{
            n: 'fntext',
            col: true,
            en: {
              lp: 'fntext'
            },
            ti: '.Fntext'
          }, {
            n: 'fnzeichen',
            en: {
              lp: 'fnzeichen'
            },
            ti: '.Fnzeichen'
          }]
      }, {
        ln: 'Bdquo',
        tn: null
      }, {
        ln: 'Gs',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Rdquo',
        tn: null
      }, {
        ln: 'Feld',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }],
            t: 'ers'
          }, {
            n: 'code',
            an: {
              lp: 'code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Abschnitt',
        tn: null,
        ps: [{
            n: 'kzinhalt',
            col: true,
            en: {
              lp: 'kzinhalt'
            },
            ti: '.Kzinhalt'
          }, {
            n: 'fzinhalt',
            col: true,
            en: {
              lp: 'fzinhalt'
            },
            ti: '.Fzinhalt'
          }, {
            n: 'blockOrUeberschriftOrAbsatz',
            col: true,
            etis: [{
                en: {
                  lp: 'block'
                },
                ti: '.BlockType'
              }, {
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }],
            t: 'es'
          }, {
            n: 'nr',
            an: {
              lp: 'nr'
            },
            t: 'a'
          }, {
            n: 'endnhier',
            ti: 'Boolean',
            an: {
              lp: 'endnhier'
            },
            t: 'a'
          }, {
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }, {
            n: 'paperf',
            an: {
              lp: 'paperf'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'DocumentResult',
        tn: null,
        ps: [{
            n: 'error',
            en: {
              lp: 'Error'
            },
            ti: '.TError'
          }, {
            n: 'ogdDocumentMetadata',
            en: {
              lp: 'OGDDocumentMetadata'
            },
            ti: '.TOGDWebDocument'
          }, {
            n: 'status',
            an: {
              lp: 'status'
            },
            t: 'a'
          }]
      }, {
        ln: 'Em14',
        tn: null
      }, {
        ln: 'Liste',
        tn: null,
        ps: [{
            n: 'ziffernlisteOrLiteralisteOrSubliteraliste',
            col: true,
            etis: [{
                en: {
                  lp: 'ziffernliste'
                },
                ti: '.Ziffernliste'
              }, {
                en: {
                  lp: 'literaliste'
                },
                ti: '.Literaliste'
              }, {
                en: {
                  lp: 'subliteraliste'
                },
                ti: '.Subliteraliste'
              }, {
                en: {
                  lp: 'strichliste'
                },
                ti: '.Strichliste'
              }, {
                en: {
                  lp: 'betragliste'
                },
                ti: '.Betragliste'
              }, {
                en: {
                  lp: 'betraglistetgue'
                },
                ti: '.Betraglistetgue'
              }, {
                en: {
                  lp: 'erlliste'
                },
                ti: '.Erlliste'
              }, {
                en: {
                  lp: 'schluss'
                },
                ti: '.Schluss'
              }],
            t: 'es'
          }]
      }, {
        ln: 'En',
        tn: null
      }, {
        ln: 'Symbol',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'stellen',
            ti: 'Integer',
            an: {
              lp: 'stellen'
            },
            t: 'a'
          }]
      }, {
        ln: 'S',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Strichliste',
        tn: null,
        ps: [{
            n: 'listelem',
            col: true,
            en: {
              lp: 'listelem'
            },
            ti: '.Listelem'
          }, {
            n: 'ebene',
            ti: 'Integer',
            an: {
              lp: 'ebene'
            },
            t: 'a'
          }]
      }, {
        ln: 'TArrayOfString',
        tn: 'T_ArrayOfString',
        ps: [{
            n: 'item',
            col: true,
            en: {
              lp: 'item'
            }
          }]
      }, {
        ln: 'Error',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Wechsel',
        tn: null,
        ps: [{
            n: 'typ',
            an: {
              lp: 'typ'
            },
            t: 'a'
          }]
      }, {
        ln: 'Super',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'TArrayOfWebDocumentContentReference',
        tn: 'T_ArrayOfWebDocumentContentReference',
        ps: [{
            n: 'contentReference',
            col: true,
            en: {
              lp: 'ContentReference'
            },
            ti: '.TWebDocumentContentReference'
          }]
      }, {
        ln: 'Adid',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Dots',
        tn: null
      }, {
        ln: 'Pre',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'pre'
                },
                ti: '.Pre'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Layoutdaten',
        tn: null,
        ps: [{
            n: 'classes',
            en: {
              lp: 'classes'
            }
          }, {
            n: 'paperf',
            an: {
              lp: 'paperf'
            },
            t: 'a'
          }, {
            n: 'paperw',
            an: {
              lp: 'paperw'
            },
            t: 'a'
          }, {
            n: 'paperh',
            an: {
              lp: 'paperh'
            },
            t: 'a'
          }, {
            n: 'margl',
            an: {
              lp: 'margl'
            },
            t: 'a'
          }, {
            n: 'margr',
            an: {
              lp: 'margr'
            },
            t: 'a'
          }, {
            n: 'margt',
            an: {
              lp: 'margt'
            },
            t: 'a'
          }, {
            n: 'margb',
            an: {
              lp: 'margb'
            },
            t: 'a'
          }, {
            n: 'headerd',
            an: {
              lp: 'headerd'
            },
            t: 'a'
          }, {
            n: 'footerd',
            an: {
              lp: 'footerd'
            },
            t: 'a'
          }, {
            n: 'gutter',
            an: {
              lp: 'gutter'
            },
            t: 'a'
          }, {
            n: 'gutterpos',
            an: {
              lp: 'gutterpos'
            },
            t: 'a'
          }, {
            n: 'deftab',
            an: {
              lp: 'deftab'
            },
            t: 'a'
          }]
      }, {
        ln: 'Beschr',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'halign',
            an: {
              lp: 'halign'
            },
            t: 'a'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Div',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'textbox'
                },
                ti: '.Textbox'
              }, {
                en: {
                  lp: 'ueberschrift'
                },
                ti: '.Ueberschrift'
              }, {
                en: {
                  lp: 'unterschrift'
                },
                ti: '.Unterschrift'
              }, {
                en: {
                  lp: 'ausgabe'
                },
                ti: '.Ausgabe'
              }, {
                en: {
                  lp: 'absatz'
                },
                ti: '.Absatz'
              }, {
                en: {
                  lp: 'abstand'
                },
                ti: '.Abstand'
              }, {
                en: {
                  lp: 'liste'
                },
                ti: '.Liste'
              }, {
                en: {
                  lp: 'beschr'
                },
                ti: '.Beschr'
              }, {
                en: {
                  lp: 'pdvorlage'
                },
                ti: '.Pdvorlage'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'inhaltsvz'
                },
                ti: '.Inhaltsvz'
              }, {
                en: {
                  lp: 'table'
                },
                ti: '.Table'
              }],
            t: 'ers'
          }, {
            n: 'id',
            ti: 'ID',
            an: {
              lp: 'id'
            },
            t: 'a'
          }, {
            n: 'align',
            an: {
              lp: 'align'
            },
            t: 'a'
          }, {
            n: 'clazz',
            an: {
              lp: 'class'
            },
            t: 'a'
          }, {
            n: 'style',
            an: {
              lp: 'style'
            },
            t: 'a'
          }, {
            n: 'width',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'twips',
            an: {
              lp: 'twips'
            },
            t: 'a'
          }]
      }, {
        ln: 'Kidea',
        tn: null
      }, {
        ln: 'Pdvorlage',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: {
                  lp: 'pdeinst'
                },
                ti: '.Pdeinst'
              }, {
                en: {
                  lp: 'bdash'
                },
                ti: '.Bdash'
              }, {
                en: {
                  lp: 'euro'
                },
                ti: '.Euro'
              }, {
                en: {
                  lp: 'tab'
                },
                ti: '.Tab'
              }, {
                en: {
                  lp: 'link'
                },
                ti: '.Link'
              }, {
                en: {
                  lp: 'fnzeichen'
                },
                ti: '.Fnzeichen'
              }, {
                en: {
                  lp: 'rdquo'
                },
                ti: '.Rdquo'
              }, {
                en: {
                  lp: 'lidea'
                },
                ti: '.Lidea'
              }, {
                en: {
                  lp: 'binary'
                },
                ti: '.Binary'
              }, {
                en: {
                  lp: 'em'
                },
                ti: '.Em'
              }, {
                en: {
                  lp: 'uchar'
                },
                ti: '.Uchar'
              }, {
                en: {
                  lp: 'i'
                },
                ti: '.I'
              }, {
                en: {
                  lp: 'super'
                },
                ti: '.Super'
              }, {
                en: {
                  lp: 'em14'
                },
                ti: '.Em14'
              }, {
                en: {
                  lp: 'gt'
                },
                ti: '.Gt'
              }, {
                en: {
                  lp: 'ldquo'
                },
                ti: '.Ldquo'
              }, {
                en: {
                  lp: 'sbquo'
                },
                ti: '.Sbquo'
              }, {
                en: {
                  lp: 'n'
                },
                ti: '.N'
              }, {
                en: {
                  lp: 'b'
                },
                ti: '.B'
              }, {
                en: {
                  lp: 'amp'
                },
                ti: '.Amp'
              }, {
                en: {
                  lp: 'u'
                },
                ti: '.U'
              }, {
                en: {
                  lp: 'br'
                },
                ti: '.Br'
              }, {
                en: {
                  lp: 'dots'
                },
                ti: '.Dots'
              }, {
                en: {
                  lp: 'rsquo'
                },
                ti: '.Rsquo'
              }, {
                en: {
                  lp: 'lsquo'
                },
                ti: '.Lsquo'
              }, {
                en: {
                  lp: 'gldsym'
                },
                ti: '.Gldsym'
              }, {
                en: {
                  lp: 's'
                },
                ti: '.S'
              }, {
                en: {
                  lp: 'tm'
                },
                ti: '.Tm'
              }, {
                en: {
                  lp: 'gdash'
                },
                ti: '.Gdash'
              }, {
                en: {
                  lp: 'bdquo'
                },
                ti: '.Bdquo'
              }, {
                en: {
                  lp: 'en'
                },
                ti: '.En'
              }, {
                en: {
                  lp: 'feld'
                },
                ti: '.Feld'
              }, {
                en: {
                  lp: 'aw'
                },
                ti: '.Aw'
              }, {
                en: {
                  lp: 'wechsel'
                },
                ti: '.Wechsel'
              }, {
                en: {
                  lp: 'kidea'
                },
                ti: '.Kidea'
              }, {
                en: {
                  lp: 'error'
                },
                ti: '.Error'
              }, {
                en: {
                  lp: 'sub'
                },
                ti: '.Sub'
              }, {
                en: {
                  lp: 'lt'
                },
                ti: '.Lt'
              }, {
                en: {
                  lp: 'gs'
                },
                ti: '.Gs'
              }, {
                en: {
                  lp: 'nbsp'
                },
                ti: '.Nbsp'
              }],
            t: 'ers'
          }, {
            n: 'ct',
            an: {
              lp: 'ct'
            },
            t: 'a'
          }]
      }, {
        ln: 'Lidea',
        tn: null
      }, {
        ln: 'Erlliste',
        tn: null,
        ps: [{
            n: 'listelem',
            col: true,
            en: {
              lp: 'listelem'
            },
            ti: '.Listelem'
          }]
      }, {
        t: 'enum',
        ln: 'TApplikation',
        vs: ['Bundesrecht']
      }, {
        t: 'enum',
        ln: 'TWebDocumentContentType',
        vs: ['MainDocument', 'Attachment']
      }, {
        t: 'enum',
        ln: 'TWebDocumentDataType',
        vs: ['Xml', 'Pdf', 'Gif', 'Jpg', 'Tiff', 'Png']
      }],
    eis: [{
        en: {
          lp: 'schluss'
        },
        ti: '.Schluss'
      }, {
        en: {
          lp: 'pdeinst'
        },
        ti: '.Pdeinst'
      }, {
        en: {
          lp: 'DocumentResult'
        },
        ti: '.DocumentResult'
      }, {
        en: {
          lp: 'table'
        },
        ti: '.Table'
      }, {
        en: {
          lp: 'beschr'
        },
        ti: '.Beschr'
      }, {
        en: {
          lp: 'n'
        },
        ti: '.N'
      }, {
        en: {
          lp: 'kzinhalt'
        },
        ti: '.Kzinhalt'
      }, {
        en: {
          lp: 'gldsym'
        },
        ti: '.Gldsym'
      }, {
        en: {
          lp: 'pdvorlage'
        },
        ti: '.Pdvorlage'
      }, {
        en: {
          lp: 'tm'
        },
        ti: '.Tm'
      }, {
        en: {
          lp: 'caption'
        },
        ti: '.Caption'
      }, {
        en: {
          lp: 'pre'
        },
        ti: '.Pre'
      }, {
        en: {
          lp: 'colgroup'
        },
        ti: '.Colgroup'
      }, {
        en: {
          lp: 'symbol'
        },
        ti: '.Symbol'
      }, {
        en: {
          lp: 'listelem'
        },
        ti: '.Listelem'
      }, {
        en: {
          lp: 'em14'
        },
        ti: '.Em14'
      }, {
        en: {
          lp: 'td'
        },
        ti: '.Td'
      }, {
        en: {
          lp: 'bdash'
        },
        ti: '.Bdash'
      }, {
        en: {
          lp: 'dots'
        },
        ti: '.Dots'
      }, {
        en: {
          lp: 'absatz'
        },
        ti: '.Absatz'
      }, {
        en: {
          lp: 'fntext'
        },
        ti: '.Fntext'
      }, {
        en: {
          lp: 'addat'
        },
        ti: '.Addat'
      }, {
        en: {
          lp: 'liste'
        },
        ti: '.Liste'
      }, {
        en: {
          lp: 'lt'
        },
        ti: '.Lt'
      }, {
        en: {
          lp: 'risdok'
        },
        ti: '.Risdok'
      }, {
        en: {
          lp: 'super'
        },
        ti: '.Super'
      }, {
        en: {
          lp: 'adid'
        },
        ti: '.Adid'
      }, {
        en: {
          lp: 'b'
        },
        ti: '.B'
      }, {
        en: {
          lp: 'bdquo'
        },
        ti: '.Bdquo'
      }, {
        en: {
          lp: 'fnen'
        },
        ti: '.Fnen'
      }, {
        en: {
          lp: 'tab'
        },
        ti: '.Tab'
      }, {
        en: {
          lp: 'subliteraliste'
        },
        ti: '.Subliteraliste'
      }, {
        en: {
          lp: 'aw'
        },
        ti: '.Aw'
      }, {
        en: {
          lp: 'tbody'
        },
        ti: '.Tbody'
      }, {
        en: {
          lp: 'binary'
        },
        ti: '.Binary'
      }, {
        en: {
          lp: 'sub'
        },
        ti: '.Sub'
      }, {
        en: {
          lp: 'wechsel'
        },
        ti: '.Wechsel'
      }, {
        en: {
          lp: 'src'
        }
      }, {
        en: {
          lp: 'link'
        },
        ti: '.Link'
      }, {
        en: {
          lp: 'abschnitt'
        },
        ti: '.Abschnitt'
      }, {
        en: {
          lp: 'Aenderungsdatum'
        },
        ti: 'Calendar',
        sc: '.TOGDWebDocument'
      }, {
        en: {
          lp: 's'
        },
        ti: '.S'
      }, {
        en: {
          lp: 'em'
        },
        ti: '.Em'
      }, {
        en: {
          lp: 'ziffernliste'
        },
        ti: '.Ziffernliste'
      }, {
        en: {
          lp: 'amp'
        },
        ti: '.Amp'
      }, {
        en: {
          lp: 'layoutdaten'
        },
        ti: '.Layoutdaten'
      }, {
        en: {
          lp: 'lsquo'
        },
        ti: '.Lsquo'
      }, {
        en: {
          lp: 'nutzdaten'
        },
        ti: '.Nutzdaten'
      }, {
        en: {
          lp: 'i'
        },
        ti: '.I'
      }, {
        en: {
          lp: 'rdquo'
        },
        ti: '.Rdquo'
      }, {
        en: {
          lp: 'col'
        },
        ti: '.Col'
      }, {
        en: {
          lp: 'th'
        },
        ti: '.Th'
      }, {
        en: {
          lp: 'betragliste'
        },
        ti: '.Betragliste'
      }, {
        en: {
          lp: 'base64'
        },
        ti: 'Base64Binary'
      }, {
        en: {
          lp: 'textbox'
        },
        ti: '.Textbox'
      }, {
        en: {
          lp: 'Ausserkrafttretedatum'
        },
        ti: 'Calendar',
        sc: '.TOGDWebDocument'
      }, {
        en: {
          lp: 'lidea'
        },
        ti: '.Lidea'
      }, {
        en: {
          lp: 'tr'
        },
        ti: '.Tr'
      }, {
        en: {
          lp: 'u'
        },
        ti: '.U'
      }, {
        en: {
          lp: 'abstand'
        },
        ti: '.Abstand'
      }, {
        en: {
          lp: 'fnzeichen'
        },
        ti: '.Fnzeichen'
      }, {
        en: {
          lp: 'error'
        },
        ti: '.Error'
      }, {
        en: {
          lp: 'ldquo'
        },
        ti: '.Ldquo'
      }, {
        en: {
          lp: 'gt'
        },
        ti: '.Gt'
      }, {
        en: {
          lp: 'kidea'
        },
        ti: '.Kidea'
      }, {
        en: {
          lp: 'inhaltsvz'
        },
        ti: '.Inhaltsvz'
      }, {
        en: {
          lp: 'unterschrift'
        },
        ti: '.Unterschrift'
      }, {
        en: {
          lp: 'erlliste'
        },
        ti: '.Erlliste'
      }, {
        en: {
          lp: 'Inkrafttretedatum'
        },
        ti: 'Calendar',
        sc: '.TOGDWebDocument'
      }, {
        en: {
          lp: 'rsquo'
        },
        ti: '.Rsquo'
      }, {
        en: {
          lp: 'gdash'
        },
        ti: '.Gdash'
      }, {
        en: {
          lp: 'betraglistetgue'
        },
        ti: '.Betraglistetgue'
      }, {
        en: {
          lp: 'ueberschrift'
        },
        ti: '.Ueberschrift'
      }, {
        en: {
          lp: 'fzinhalt'
        },
        ti: '.Fzinhalt'
      }, {
        en: {
          lp: 'en'
        },
        ti: '.En'
      }, {
        en: {
          lp: 'br'
        },
        ti: '.Br'
      }, {
        en: {
          lp: 'ausgabe'
        },
        ti: '.Ausgabe'
      }, {
        en: {
          lp: 'div'
        },
        ti: '.Div'
      }, {
        en: {
          lp: 'OGDSearchResult'
        },
        ti: '.TOGDSearchResult'
      }, {
        en: {
          lp: 'thead'
        },
        ti: '.Thead'
      }, {
        en: {
          lp: 'euro'
        },
        ti: '.Euro'
      }, {
        en: {
          lp: 'gs'
        },
        ti: '.Gs'
      }, {
        en: {
          lp: 'feld'
        },
        ti: '.Feld'
      }, {
        en: {
          lp: 'literaliste'
        },
        ti: '.Literaliste'
      }, {
        en: {
          lp: 'tfoot'
        },
        ti: '.Tfoot'
      }, {
        en: {
          lp: 'nbsp'
        },
        ti: '.Nbsp'
      }, {
        en: {
          lp: 'sbquo'
        },
        ti: '.Sbquo'
      }, {
        en: {
          lp: 'strichliste'
        },
        ti: '.Strichliste'
      }, {
        en: {
          lp: 'adtext'
        },
        ti: '.Adtext'
      }, {
        en: {
          lp: 'Veroeffentlichungsdatum'
        },
        ti: 'Calendar',
        sc: '.TOGDWebDocument'
      }, {
        en: {
          lp: 'uchar'
        },
        ti: '.Uchar'
      }, {
        en: {
          lp: 'Unterzeichnungsdatum'
        },
        ti: 'Calendar',
        sc: '.TOGDWebDocument'
      }]
  };
  return {
    OGD: OGD,
    OGD_DocumentResponse: OGD_DocumentResponse
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OGD_1_3_Module_Factory);
}
else {
  var OGD_1_3_Module = OGD_1_3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OGD = OGD_1_3_Module.OGD;
    module.exports.OGD_DocumentResponse = OGD_1_3_Module.OGD_DocumentResponse;
  }
  else {
    var OGD = OGD_1_3_Module.OGD;
    var OGD_DocumentResponse = OGD_1_3_Module.OGD_DocumentResponse;
  }
}