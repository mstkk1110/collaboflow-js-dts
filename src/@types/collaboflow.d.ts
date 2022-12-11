declare namespace CollaboflowStatic {
  type TkeyValue = { [key: string]: any };

  interface ApiResponse {
    /**
     * Collaboflow REST APIの応答HTTPステータスコードを取得します。
     * @type {number}
     * @memberof ApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly status: number;

    /**
     * Collaboflow REST APIの応答HTTPステータステキストを取得します。
     * @type {number}
     * @memberof ApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly status_text: string;

    /**
     * Collaboflow REST APIの応答ヘッダーを取得します。
     * @type {number}
     * @memberof ApiResponse
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     */
    readonly headers: TkeyValue;

    /**
     * Collaboflow REST APIの応答内容を取得します。
     * @type {number}
     * @memberof ApiResponse
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
     * @memberof Api
     */
    get(path: string, parameters: TkeyValue): Promise<ApiResponse>;

    /**
     * Collaboflow REST API へ postリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {(TkeyValue | FormData)} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.post('collaboflow rest api path', {'key': value})
     * @memberof Api
     */
    post(path: string, parameters: TkeyValue | FormData): Promise<ApiResponse>;

    /**
     * Collaboflow REST API へ putリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {TkeyValue} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.put('collaboflow rest api path', {'key': value})
     * @memberof Api
     */
    put(path: string, parameters: TkeyValue): Promise<ApiResponse>;

    /**
     * Collaboflow REST API へ deleteリクエストを実行します。
     * @param {string} path Collaboflow REST API のパス
     * @param {TkeyValue} parameters リクエストパラメーター
     * @returns {Promise<ApiResponse>} Promise
     * @see [collaboflow REST API](http://docs.collaboflow.com/api-docs/)
     * @example collaboflow.api.delete('collaboflow rest api path', {'key': value})
     * @memberof Api
     */
    delete(path: string, parameters: TkeyValue): Promise<ApiResponse>;
  }

  interface ProxyResponse {
    /**
     * Collaboflow Proxy APIの応答結果を取得します。
     * statusが200～299または304の場合はtrue
     * @type {boolean}
     * @memberof ProxyResponse
     */
    readonly success: boolean;

    /**
     * Collaboflow Proxy APIの応答HTTPステータスコードを取得します。
     * @type {number}
     * @memberof ProxyResponse
     */
    readonly status: number;

    /**
     * Collaboflow Proxy APIの応答HTTPステータステキストを取得します。
     * @type {number}
     * @memberof ProxyResponse
     */
    readonly status_text: string;

    /**
     * Collaboflow Proxy APIの応答ヘッダーを取得します。
     * @type {number}
     * @memberof ProxyResponse
     */
    readonly headers: TkeyValue;

    /**
     * Collaboflow Proxy APIの応答を取形式を取得します。
     * @type {('string' | 'object' | 'base64')}
     * @memberof ProxyResponse
     */
    readonly body_type: 'string' | 'object' | 'base64';

    /**
     * Collaboflow Proxy APIの応答内容を取得します。
     * @type {number}
     * @memberof ProxyResponse
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
     * @memberof ProxyApi
     */
    get(url: string, headers: TkeyValue, parseType?: ProxyParseType): Promise<ProxyResponse>;

    /**
     * 外部サイトのAPIへheadリクエストを実行します。
     *
     * @param {string} url リクエストURL
     * @param {TkeyValue} headers リクエスト先に送信するHTTPヘッダー
     * @param {ProxyParseType} [parseType] 受信したボディ部の変換方法
     * @returns {Promise<ProxyResponse>}
     * @memberof ProxyApi
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
     * @memberof ProxyApi
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
     * @memberof ProxyApi
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
     * @memberof ProxyApi
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
     * @memberof ProxyApi
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
     * @memberof PartsValue
     */
    readonly type: PartsType;

    /**
     * パーツの有効状態を取得します。
     *
     * @type {boolean}
     * @memberof PartsValue
     */
    readonly enabled: boolean;

    /**
     * パーツの表示状態を取得、または設定します。
     *
     * @type {boolean}
     * @memberof PartsValue
     */
    display: boolean;

    /**
     * パーツの値を取得、または設定します。
     * テーブルの場合、行毎のパーツ情報配列が取得されます。
     *
     * @type {(any | RowValue[])}
     * @memberof PartsValue
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
     * @memberof EventData
     */
    readonly app_cd: number;

    /**
     * 経路IDを取得します。
     *
     * @type {number}
     * @memberof EventData
     */
    readonly processes_id: number;

    /**
     * 文書IDを取得します。
     *
     * @type {number}
     * @memberof EventData
     */
    readonly document_id: number;

    /**
     * 発生したイベント名を取得します。
     *
     * @type {string}
     * @memberof EventData
     */
    readonly event_name: string;

    /**
     * パーツオブジェクトを取得します。
     *
     * @type {PartsData}
     * @memberof EventData
     */
    readonly parts: PartsData;

    /**
     * パーツIDを取得します。
     * 変更イベント発生時のみ取得できます。
     *
     * @type {string}
     * @memberof EventData
     */
    readonly parts_id?: string;

    /**
     * テーブルパーツのIDを取得します。
     * テーブルパーツのイベント発生時のみ取得できます。
     *
     * @type {number}
     * @memberof EventData
     */
    readonly table_id?: number;

    /**
     * 行IDを取得します。
     * テーブルパーツのイベント発生時のみ取得できます。
     *
     * @type {number}
     * @memberof EventData
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
     * @memberof Events
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     */
    on(eventNames: EventKey | EventKey[] | string | string[], callback: EventCallback): void;

    /**
     * 指定されたイベント名とコールバック関数を関連付けを行います。
     *
     * @param {(EventKey | EventKey[] | string | string[])} eventNames イベント名
     * @param {EventCallback} callback コールバック関数
     * @memberof Events
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     */
    off(eventNames: EventKey | EventKey[] | string | string[], callback: Function): void;

    /**
     * 指定されたイベントが登録されているかを返します。
     *
     * @param {(EventKey | string)} eventName イベント名
     * @returns {boolean}
     * @memberof Events
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     */
    has(eventName: EventKey | string): boolean;
  }

  interface LoginUser {
    /**
     * ユーザーID
     */
    userid: string;
    /**
     * 氏名
     */
    name: string;
    /**
     * 氏名（ふりがな）
     */
    name_reading: string;
    /**
     * 社員コード
     */
    employee_code: string;
    /**
     * 電話番号
     */
    phone: string;
    /**
     * 携帯電話番号
     */
    phone_mobile: string;
    /**
     * FAX
     */
    fax: string;
    /**
     * メールアドレス（PC）
     */
    email: string;
    /**
     * メールアドレス（携帯）
     */
    email_mobile: string;
    /**
     * 拡張項目1
     */
    extra1: string;
    /**
     * 拡張項目2
     */
    extra2: string;
    /**
     * 拡張項目3
     */
    extra3: string;
    /**
     * 拡張項目4
     */
    extra4: string;
    /**
     * 拡張項目5
     */
    extra5: string;
  }

  interface collaboflow {
    /**
     * Collaboflow REST API へリクエストを行います。
     * @see [コラボフロー REST APIを実行する](https://collaboflow.zendesk.com/hc/ja/articles/360000262896)
     * @type {Api}
     * @memberof collaboflow
     */
    api: Api;

    /**
     * CollaboflowのEventEmitterです。
     *
     * @see [イベントの記述方法](https://collaboflow.zendesk.com/hc/ja/articles/360000262936)
     * @type {Events}
     * @memberof collaboflow
     */
    events: Events;

    /**
     * 外部サイトのAPIへリクエストを行います。
     *
     * @see [外部のAPIを実行する](https://collaboflow.zendesk.com/hc/ja/articles/360000262876)
     * @type {ProxyApi}
     * @memberof collaboflow
     */
    proxy: ProxyApi;

    /**
     * 非同期処理を制御します。
     *
     * @type {Promise}
     * @memberof collaboflow
     */
    Promise: Promise<any>;

    /**
     * ログインユーザー情報を取得します。
     *
     * @see [用意されている関数](https://collaboflow.zendesk.com/hc/ja/articles/360000266915)
     * @type {Function}
     * @memberof collaboflow
     */
    getLoginUser(): LoginUser;
  }
}

declare var collaboflow: CollaboflowStatic.collaboflow;
