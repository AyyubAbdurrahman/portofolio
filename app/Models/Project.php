<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'category', 'description', 'thumbnail',
        'tech_stack', 'github_link', 'live_link'
    ];

    protected $casts = [
        'tech_stack' => 'array',
    ];

    public function uiuxDetails()
    {
        return $this->hasMany(UiUxDetail::class);
    }
}