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
}
