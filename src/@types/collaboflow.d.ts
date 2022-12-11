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
}
