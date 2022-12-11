declare namespace CollaboflowStatic {
  type TkeyValue = { [key: string]: any };

  interface ApiResponse {
    /**
     * Collaboflow REST APIの応答HTTPステータスコードを取得します。
     * @type {number}
     * @memberof iApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly status: number;

    /**
     * Collaboflow REST APIの応答HTTPステータステキストを取得します。
     * @type {number}
     * @memberof iApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly status_text: string;

    /**
     * Collaboflow REST APIの応答ヘッダーを取得します。
     * @type {number}
     * @memberof iApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly headers: TkeyValue;

    /**
     * Collaboflow REST APIの応答内容を取得します。
     * @type {number}
     * @memberof iApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly body: TkeyValue;
  }

  interface Api {
    /**
     * Collaboflow REST API へ getリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {TkeyValue} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.get('/v1/documents/1', {'app_cd': 1})
     * @memberof IApi
     */
    get(path: string, parameters: TkeyValue): Promise<ApiResponse>;

    /**
     * Collaboflow REST API へ postリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {(TkeyValue | FormData)} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.post('collaboflow rest api path', {'key': value})
     * @memberof IApi
     */
    post(path: string, parameters: TkeyValue | FormData): Promise<ApiResponse>;

    /**
     * Collaboflow REST API へ putリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {TkeyValue} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.put('collaboflow rest api path', {'key': value})
     * @memberof IApi
     */
    put(path: string, parameters: TkeyValue): Promise<ApiResponse>;

    /**
     * Collaboflow REST API へ deleteリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {TkeyValue} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.delete('collaboflow rest api path', {'key': value})
     * @memberof IApi
     */
    delete(path: string, parameters: TkeyValue): Promise<ApiResponse>;
  }

  interface ProxyResponse {
    /**
     * Collaboflow Proxy APIの応答結果を取得します。
     * statusが200～299または304の場合はtrue
     * @type {boolean}
     * @memberof iProxyResponse
     */
    readonly success: boolean;

    /**
     * Collaboflow Proxy APIの応答HTTPステータスコードを取得します。
     * @type {number}
     * @memberof iProxyResponse
     */
    readonly status: number;

    /**
     * Collaboflow Proxy APIの応答HTTPステータステキストを取得します。
     * @type {number}
     * @memberof iProxyResponse
     */
    readonly status_text: string;

    /**
     * Collaboflow Proxy APIの応答ヘッダーを取得します。
     * @type {number}
     * @memberof iProxyResponse
     */
    readonly headers: TkeyValue;

    /**
     * Collaboflow Proxy APIの応答を取形式を取得します。
     * @type {('string' | 'object' | 'base64')}
     * @memberof iProxyResponse
     */
    readonly body_type: 'string' | 'object' | 'base64';

    /**
     * Collaboflow Proxy APIの応答内容を取得します。
     * @type {number}
     * @memberof iProxyResponse
     */
    readonly body: string | TkeyValue;
  }

  /**
   * Collaboflow Proxy API 応答内容の変換種別
   * @typedef {string} ProxyParseType
   */
  type ProxyParseType = '' | 'text' | 'json' | 'base64';

  interface ProxyApi {
    /**
     * 外部サイトのAPIへgetリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof IWebProxy
     */
    get(url: string, headers: TkeyValue, parseType?: ProxyParseType): Promise<ProxyResponse>;

    /**
     * 外部サイトのAPIへheadリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof IWebProxy
     */
    head(url: string, headers: TkeyValue, parseType?: ProxyParseType): Promise<ProxyResponse>;

    /**
     * 外部サイトのAPIへpostリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {(string | TkeyValue)} body 送信するボディ
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof IWebProxy
     */
    post(url: string, headers: TkeyValue, body: string | TkeyValue, parseType?: ProxyParseType): Promise<ProxyResponse>;

    /**
     * 外部サイトのAPIへputリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {(string | TkeyValue)} body 送信するボディ
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof IWebProxy
     */
    put(url: string, headers: TkeyValue, body: string | TkeyValue, parseType?: ProxyParseType): Promise<ProxyResponse>;

    /**
     * 外部サイトのAPIへpatchリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {(string | TkeyValue)} body 送信するボディ
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof IWebProxy
     */
    patch(
      url: string,
      headers: TkeyValue,
      body: string | TkeyValue,
      parseType?: ProxyParseType
    ): Promise<ProxyResponse>;

    /**
     * 外部サイトのAPIへdeleteリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {(string | TkeyValue)} body 送信するボディ
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof IWebProxy
     */
    delete(
      url: string,
      headers: TkeyValue,
      body: string | TkeyValue,
      parseType?: ProxyParseType
    ): Promise<ProxyResponse>;
  }

  type PartsType =
    | 'calculate'
    | 'checkbox'
    | 'date'
    | 'label'
    | 'list'
    | 'lookup'
    | 'money'
    | 'number'
    | 'radio'
    | 'table'
    | 'textarea'
    | 'text'
    | 'time'
    | 'image';

  type RowValue = { [key: string]: PartsValue };

  interface PartsValue {
    /**
     * パーツの種別を取得します。
     *
     * @type {PartsType}
     * @memberof IPartsValue
     */
    readonly type: PartsType;

    /**
     * パーツの有効状態を取得します。
     *
     * @type {boolean}
     * @memberof IPartsValue
     */
    readonly enabled: boolean;

    /**
     * パーツの表示状態を取得、または設定します。
     *
     * @type {boolean}
     * @memberof IPartsValue
     */
    display: boolean;

    /**
     * パーツの値を取得、または設定します。
     * テーブルの場合、行毎のパーツ情報配列が取得されます。
     *
     * @type {(any | RowValue[])}
     * @memberof IPartsValue
     */
    value: any | RowValue[];
  }

  interface PartsData {
    [key: string]: PartsValue;
  }

  interface EventData {
    /**
     * アプリケーションコードを取得します。
     *
     * @type {number}
     * @memberof IEventData
     */
    readonly app_cd: number;

    /**
     * 経路IDを取得します。
     *
     * @type {number}
     * @memberof IEventData
     */
    readonly processes_id: number;

    /**
     * 文書IDを取得します。
     *
     * @type {number}
     * @memberof IEventData
     */
    readonly document_id: number;

    /**
     * 発生したイベント名を取得します。
     *
     * @type {string}
     * @memberof IEventData
     */
    readonly event_name: string;

    /**
     * パーツオブジェクトを取得します。
     *
     * @type {PartsData}
     * @memberof IEventData
     */
    readonly parts: PartsData;

    /**
     * パーツIDを取得します。
     * 変更イベント発生時のみ取得できます。
     *
     * @type {string}
     * @memberof IEventData
     */
    readonly parts_id?: string;

    /**
     * テーブルパーツのIDを取得します。
     * テーブルパーツのイベント発生時のみ取得できます。
     *
     * @type {number}
     * @memberof IEventData
     */
    readonly table_id?: number;

    /**
     * 行IDを取得します。
     * テーブルパーツのイベント発生時のみ取得できます。
     *
     * @type {number}
     * @memberof IEventData
     */
    readonly row_index?: number;
  }

  /**
   * イベントのコールバックハンドラー
   *
   * @callback TEventCallback
   * @param {EventData} eventData イベントデータ
   */
  type EventCallback = (eventData: EventData) => void | boolean | Promise<any>;

  type EventKey =
    | 'request.input.show'
    | 'request.input.check'
    | 'request.confirm.show'
    | 'request.confirm.apply'
    | 'request.detail.show'
    | 'request.detail.accept'
    | 'request.detail.reject'
    | 'request.detail.remand'
    | 'request.detail.confirm'
    | 'request.detail.takeback'
    | 'request.judgement.show'
    | 'request.judgement.accept'
    | 'request.judgement.reject'
    | 'request.judgement.remand'
    | 'request.judgement.confirm';

  interface Events {
    /**
     * 指定されたイベント名とコールバック関数を関連付けを行います。
     *
     * @param {(EventKey | EventKey[] | string | string[])} eventNames イベント名
     * @param {EventCallback} callback コールバック関数
     * @example
     * collaboflow.event.on('request.input.show', (eventData: collaboflow.EventData) => {
     *   console.dir(eventData);
     * })
     * @example
     * const eventNames: collaboflow.EventKey[] = ['request.input.show', 'request.confirm.show'];
     * collaboflow.event.on(eventNames, (eventData: collaboflow.EventData) => {
     *   console.dir(eventData);
     * })
     * @memberof IEvents
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     */
    on(eventNames: EventKey | EventKey[] | string | string[], callback: EventCallback): void;

    /**
     * 指定されたイベント名とコールバック関数を関連付けを行います。
     *
     * @param {(EventKey | EventKey[] | string | string[])} eventNames イベント名
     * @param {EventCallback} callback コールバック関数
     * @memberof IEvents
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     */
    off(eventNames: EventKey | EventKey[] | string | string[], callback: Function): void;

    /**
     * 指定されたイベントが登録されているかを返します。
     *
     * @param {(EventKey | string)} eventName イベント名
     * @returns {boolean}
     * @memberof IEvents
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     */
    has(eventName: EventKey | string): boolean;
  }
}
