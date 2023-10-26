<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("/app", function (){
    return Inertia::render("AppDashboard");
})->middleware(['auth', 'verified'])->name('app');

Route::get("/members", function (){
    return Inertia::render("Members");
})->middleware(['auth', 'verified'])->name('members');

Route::get("/profile", function (){
    return Inertia::render("Profile");
})->middleware(['auth', 'verified'])->name('profile');

Route::get("/payments", function (){
    return Inertia::render("Payments");
})->middleware(['auth', 'verified'])->name('payments');

Route::get("/sportsplan", function (){
    return Inertia::render("SportsPlan");
})->middleware(['auth', 'verified'])->name('sportsplan');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';

