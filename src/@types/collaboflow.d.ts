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
}
