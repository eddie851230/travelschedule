<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        // $origin = $request->server('HTTP_ORIGIN') ? $request->server('HTTP_ORIGIN') : '';
        // $allow_origin = [
        //     'http://localhost:3000',
        // ];
        // if (in_array($origin, $allow_origin)) {
            // $response->header('Access-Control-Allow-Origin', $origin);
            $response->header('Access-Control-Allow-Origin', 'http://localhost:3000');
            $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Cookie, X-CSRF-TOKEN, Accept, Authorization, X-XSRF-TOKEN');
            $response->header('Access-Control-Expose-Headers', 'Authorization, authenticated');
            $response->header('Access-Control-Allow-Methods', 'GET, POST,DELETE, PATCH, PUT, OPTIONS');
            $response->header('Access-Control-Allow-Credentials', 'true');
    
        // }
        return $response;
    }
}
